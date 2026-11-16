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
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.notas.agenda.model.AppointmentCategory
import com.notas.agenda.model.AppointmentItem
import com.notas.agenda.model.NotasAppState
import com.notas.agenda.model.NotasScreen
import com.notas.agenda.model.NotasTab
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
import com.notas.agenda.ui.components.categoryColors
import com.notas.agenda.ui.icons.NotasIcons
import com.notas.agenda.ui.icons.NotasRibbonLogo

@Composable
fun Notas01AccesoScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    var passwordVisible by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Spacer(modifier = Modifier.height(76.dp))
            NotasRibbonLogo(
                modifier = Modifier.size(56.dp),
                primaryColor = colors.accentButton,
            )
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = "NOTAS",
                color = colors.textPrimary,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold,
                letterSpacing = 2.4.sp,
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = "N O T A S   A G E N D",
                color = colors.textSecondary,
                fontSize = 9.sp,
                fontWeight = FontWeight.SemiBold,
            )
            Spacer(modifier = Modifier.height(44.dp))
            NotasInputField(
                label = "Usuario",
                value = state.userEmail,
                onValueChange = { state.userEmail = it },
                placeholder = "correo@notas.com",
                cornerRadius = 18.dp,
            )
            Spacer(modifier = Modifier.height(22.dp))
            NotasInputField(
                label = "Contraseña",
                value = state.loginPassword,
                onValueChange = { state.loginPassword = it },
                placeholder = "••••••••••••",
                isPassword = true,
                passwordVisible = passwordVisible,
                onTogglePasswordVisibility = { passwordVisible = !passwordVisible },
                cornerRadius = 18.dp,
            )
            Spacer(modifier = Modifier.height(34.dp))
            NotasPrimaryButton(
                text = "Entrar",
                onClick = { state.navigateTo(NotasScreen.AGENDA_MONTH) },
            )
            Spacer(modifier = Modifier.height(24.dp))
        }
    }
}

private data class MonthCell(
    val dayNumber: Int,
    val inCurrentMonth: Boolean,
)

private fun buildNovember2026Cells(): List<List<MonthCell>> {
    val cells = mutableListOf<MonthCell>()
    for (d in 26..31) cells.add(MonthCell(d, false))
    for (d in 1..30) cells.add(MonthCell(d, true))
    for (d in 1..6) cells.add(MonthCell(d, false))
    return cells.chunked(7)
}

private fun dayNameForNov2026(day: Int): String {
    val names = listOf("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado")
    // 1 Noviembre 2026 es Domingo (índice 0)
    return names[(day - 1) % 7]
}

@Composable
fun Notas02AgendaMesScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    val weeks = remember { buildNovember2026Cells() }
    val monthTitles = listOf("Octubre 2026", "Noviembre 2026", "Diciembre 2026")
    val activeMonthTitle = monthTitles.getOrElse(state.monthOffset + 1) { "Noviembre 2026" }
    val selectedDayName = dayNameForNov2026(state.selectedDayOfMonth)
    val eventDays = remember(state.appointments.size, state.appointments.toList()) {
        state.appointments.map { it.dayOfMonth }.toSet() + setOf(24, 26)
    }
    val dayAppointments = state.appointments
        .filter { it.dayOfMonth == state.selectedDayOfMonth }
        .ifEmpty { state.appointments.take(2) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Tu agenda",
            subtitle = "$selectedDayName, ${state.selectedDayOfMonth} de noviembre",
            actionIcon = NotasIcons.Bell,
            onActionClick = { state.navigateTo(NotasScreen.CONFIGURE_ALERTS) },
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
            NotasSegmentedControl(
                options = listOf("Mes", "Semana", "Día"),
                selectedIndex = 0,
                onSelect = { idx ->
                    when (idx) {
                        1 -> state.navigateTo(NotasScreen.AGENDA_WEEK)
                        2 -> state.navigateTo(NotasScreen.AGENDA_DAY)
                    }
                },
            )
            Spacer(modifier = Modifier.height(18.dp))

            // Tarjeta calendario mensual
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
                    .padding(horizontal = 16.dp, vertical = 16.dp),
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(
                        text = activeMonthTitle,
                        color = colors.textPrimary,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                        Text(
                            text = "‹",
                            color = colors.textSecondary,
                            fontSize = 24.sp,
                            modifier = Modifier
                                .clip(RoundedCornerShape(8.dp))
                                .clickable { state.monthOffset = (state.monthOffset - 1).coerceAtLeast(-1) }
                                .padding(horizontal = 6.dp),
                        )
                        Text(
                            text = "›",
                            color = colors.textPrimary,
                            fontSize = 24.sp,
                            modifier = Modifier
                                .clip(RoundedCornerShape(8.dp))
                                .clickable { state.monthOffset = (state.monthOffset + 1).coerceAtMost(1) }
                                .padding(horizontal = 6.dp),
                        )
                    }
                }
                Spacer(modifier = Modifier.height(14.dp))

                Row(modifier = Modifier.fillMaxWidth()) {
                    listOf("L", "M", "X", "J", "V", "S", "D").forEach { day ->
                        Text(
                            text = day,
                            color = colors.textSecondary,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.SemiBold,
                            textAlign = TextAlign.Center,
                            modifier = Modifier.weight(1f),
                        )
                    }
                }
                Spacer(modifier = Modifier.height(10.dp))

                weeks.forEach { week ->
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 2.dp),
                    ) {
                        week.forEach { cell ->
                            val isSelected = cell.inCurrentMonth && cell.dayNumber == state.selectedDayOfMonth
                            val hasEvents = cell.inCurrentMonth && eventDays.contains(cell.dayNumber)
                            Box(
                                modifier = Modifier
                                    .weight(1f)
                                    .height(33.dp)
                                    .clip(RoundedCornerShape(11.dp))
                                    .background(if (isSelected) colors.accentButton else Color.Transparent)
                                    .clickable(enabled = cell.inCurrentMonth) {
                                        state.selectedDayOfMonth = cell.dayNumber
                                    },
                                contentAlignment = Alignment.Center,
                            ) {
                                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                    Text(
                                        text = cell.dayNumber.toString(),
                                        color = when {
                                            isSelected -> Color.White
                                            cell.inCurrentMonth -> colors.textPrimary
                                            else -> colors.textMuted
                                        },
                                        fontSize = 12.sp,
                                        fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                                    )
                                    if (hasEvents) {
                                        Spacer(modifier = Modifier.height(2.dp))
                                        Box(
                                            modifier = Modifier
                                                .size(4.dp)
                                                .clip(CircleShape)
                                                .background(if (isSelected) Color.White else colors.accentContent)
                                        )
                                    }
                                }
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(12.dp))
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(1.dp)
                        .background(colors.border)
                )
                Spacer(modifier = Modifier.height(10.dp))
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    Box(
                        modifier = Modifier
                            .size(5.dp)
                            .clip(CircleShape)
                            .background(colors.accentContent)
                    )
                    Text(
                        text = "Días con citas de tu equipo",
                        color = colors.textSecondary,
                        fontSize = 10.sp,
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(
                    text = "HOY · ${selectedDayName.uppercase()} ${state.selectedDayOfMonth}",
                    color = colors.textSecondary,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold,
                )
                Box(
                    modifier = Modifier
                        .height(32.dp)
                        .clip(RoundedCornerShape(13.dp))
                        .background(colors.accentContainer)
                        .clickable { state.openNewAppointment() }
                        .padding(horizontal = 14.dp),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = "+ Nueva cita",
                        color = colors.accentContent,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                }
            }

            Spacer(modifier = Modifier.height(10.dp))
            dayAppointments.forEach { apt ->
                AppointmentSummaryCard(
                    appointment = apt,
                    subtitle = "${apt.startTime}–${apt.endTime} · ${apt.location}",
                    onClick = { state.openEditAppointment(apt.id) },
                )
                Spacer(modifier = Modifier.height(10.dp))
            }
            Spacer(modifier = Modifier.height(12.dp))
        }

        NotasBottomNavigation(
            activeTab = NotasTab.AGENDA,
            onSelectTab = state::navigateToTab,
        )
    }
}

@Composable
fun Notas03AgendaSemanaScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    val weekDays = listOf(
        "L" to 16,
        "M" to 17,
        "X" to 18,
        "J" to 19,
        "V" to 20,
        "S" to 21,
        "D" to 22,
    )
    val hours = 9..16
    val rowHeight = 44.dp
    val weekEvents = state.appointments.filter { it.dayOfMonth in 16..22 }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Tu agenda",
            subtitle = "16–22 de noviembre de 2026",
            actionIcon = NotasIcons.Bell,
            onActionClick = { state.navigateTo(NotasScreen.CONFIGURE_ALERTS) },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))
            NotasSegmentedControl(
                options = listOf("Mes", "Semana", "Día"),
                selectedIndex = 1,
                onSelect = { idx ->
                    when (idx) {
                        0 -> state.navigateTo(NotasScreen.AGENDA_MONTH)
                        2 -> state.navigateTo(NotasScreen.AGENDA_DAY)
                    }
                },
            )
            Spacer(modifier = Modifier.height(16.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(
                    text = "16–22 noviembre",
                    color = colors.textPrimary,
                    fontSize = 18.sp,
                    fontWeight = FontWeight.SemiBold,
                )
                Box(
                    modifier = Modifier
                        .height(32.dp)
                        .clip(RoundedCornerShape(13.dp))
                        .background(colors.accentContainer)
                        .clickable {
                            state.selectedDayOfMonth = 16
                            state.navigateTo(NotasScreen.AGENDA_DAY)
                        }
                        .padding(horizontal = 15.dp),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = "Hoy",
                        color = colors.accentContent,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Cuadrícula semanal
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
                    .padding(horizontal = 10.dp, vertical = 10.dp),
            ) {
                // Cabecera de días L 16 .. D 22
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Spacer(modifier = Modifier.width(28.dp))
                    weekDays.forEach { (letter, dayNum) ->
                        val selected = state.selectedDayOfMonth == dayNum
                        Column(
                            modifier = Modifier
                                .weight(1f)
                                .clip(RoundedCornerShape(10.dp))
                                .background(if (selected) colors.accentContainer else Color.Transparent)
                                .clickable { state.selectedDayOfMonth = dayNum }
                                .padding(vertical = 4.dp),
                            horizontalAlignment = Alignment.CenterHorizontally,
                        ) {
                            Text(
                                text = letter,
                                color = colors.textSecondary,
                                fontSize = 9.sp,
                                fontWeight = FontWeight.Medium,
                            )
                            Spacer(modifier = Modifier.height(2.dp))
                            Text(
                                text = dayNum.toString(),
                                color = if (selected) colors.accentContent else colors.textPrimary,
                                fontSize = 12.sp,
                                fontWeight = FontWeight.SemiBold,
                            )
                        }
                    }
                }

                Spacer(modifier = Modifier.height(8.dp))

                // Filas por hora
                hours.forEach { hour ->
                    val hourLabel = hour.toString().padStart(2, '0')
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(rowHeight),
                        verticalAlignment = Alignment.Top,
                    ) {
                        Text(
                            text = hourLabel,
                            color = colors.textSecondary,
                            fontSize = 9.sp,
                            modifier = Modifier
                                .width(28.dp)
                                .padding(top = 2.dp),
                        )
                        weekDays.forEach { (_, dayNum) ->
                            val matchingEvent = weekEvents.firstOrNull { apt ->
                                apt.dayOfMonth == dayNum &&
                                    (apt.startTime.substringBefore(":").toIntOrNull() == hour)
                            }
                            Box(
                                modifier = Modifier
                                    .weight(1f)
                                    .height(rowHeight)
                                    .border(0.5.dp, colors.border.copy(alpha = 0.7f))
                                    .padding(2.dp),
                                contentAlignment = Alignment.Center,
                            ) {
                                if (matchingEvent != null) {
                                    val (bg, fg) = categoryColors(matchingEvent.category)
                                    Box(
                                        modifier = Modifier
                                            .fillMaxSize()
                                            .clip(RoundedCornerShape(7.dp))
                                            .background(bg)
                                            .clickable { state.openEditAppointment(matchingEvent.id) },
                                        contentAlignment = Alignment.Center,
                                    ) {
                                        Text(
                                            text = matchingEvent.weekShortLabel,
                                            color = fg,
                                            fontSize = 8.sp,
                                            fontWeight = FontWeight.SemiBold,
                                            maxLines = 1,
                                            overflow = TextOverflow.Clip,
                                        )
                                    }
                                }
                            }
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(18.dp))

            // Tarjeta resumen semanal
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 16.dp, vertical = 14.dp),
            ) {
                Text(
                    text = "Una semana en equilibrio",
                    color = colors.accentContent,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.SemiBold,
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "${weekEvents.size} citas · Sábado y domingo libres",
                    color = colors.textSecondary,
                    fontSize = 11.sp,
                )
            }
            Spacer(modifier = Modifier.height(16.dp))
        }

        NotasBottomNavigation(
            activeTab = NotasTab.AGENDA,
            onSelectTab = state::navigateToTab,
        )
    }
}

@Composable
fun Notas04AgendaDiaScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    val weekDays = listOf(
        "L" to 16,
        "M" to 17,
        "X" to 18,
        "J" to 19,
        "V" to 20,
        "S" to 21,
        "D" to 22,
    )
    val selectedDay = state.selectedDayOfMonth.let { if (it in 16..22) it else 16 }
    val dayAppointments = state.appointments.filter { it.dayOfMonth == selectedDay }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Tu agenda",
            subtitle = "${dayNameForNov2026(selectedDay)}, $selectedDay de noviembre",
            actionIcon = NotasIcons.Bell,
            onActionClick = { state.navigateTo(NotasScreen.CONFIGURE_ALERTS) },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))
            NotasSegmentedControl(
                options = listOf("Mes", "Semana", "Día"),
                selectedIndex = 2,
                onSelect = { idx ->
                    when (idx) {
                        0 -> state.navigateTo(NotasScreen.AGENDA_MONTH)
                        1 -> state.navigateTo(NotasScreen.AGENDA_WEEK)
                    }
                },
            )
            Spacer(modifier = Modifier.height(18.dp))

            // Tira semanal horizontal
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(70.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(16.dp),
                    )
                    .padding(horizontal = 6.dp, vertical = 6.dp),
                horizontalArrangement = Arrangement.spacedBy(4.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                weekDays.forEach { (letter, dayNum) ->
                    val selected = dayNum == selectedDay
                    Column(
                        modifier = Modifier
                            .weight(1f)
                            .height(58.dp)
                            .clip(RoundedCornerShape(13.dp))
                            .background(if (selected) colors.accentButton else Color.Transparent)
                            .clickable { state.selectedDayOfMonth = dayNum },
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center,
                    ) {
                        Text(
                            text = letter,
                            color = if (selected) Color.White else colors.textSecondary,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.Medium,
                        )
                        Spacer(modifier = Modifier.height(5.dp))
                        Text(
                            text = dayNum.toString(),
                            color = if (selected) Color.White else colors.textPrimary,
                            fontSize = 16.sp,
                            fontWeight = FontWeight.SemiBold,
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(18.dp))

            // Tarjeta verde resumen del día
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(66.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.successContainer)
                    .padding(horizontal = 17.dp, vertical = 10.dp),
                verticalArrangement = Arrangement.Center,
            ) {
                Text(
                    text = "${dayAppointments.size} citas",
                    color = colors.successContent,
                    fontSize = 21.sp,
                    fontWeight = FontWeight.SemiBold,
                )
                Spacer(modifier = Modifier.height(2.dp))
                Text(
                    text = if (dayAppointments.isEmpty()) {
                        "Día despejado para avanzar a tu ritmo"
                    } else {
                        "2 h 15 min para conectar con tu equipo"
                    },
                    color = colors.successContent,
                    fontSize = 11.sp,
                )
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text(
                text = "TU DÍA, DE UN VISTAZO",
                color = colors.textSecondary,
                fontSize = 10.sp,
                fontWeight = FontWeight.Bold,
            )
            Spacer(modifier = Modifier.height(12.dp))

            if (dayAppointments.isEmpty()) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(16.dp))
                        .background(colors.surface)
                        .padding(20.dp),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = "No hay citas registradas para este día.",
                        color = colors.textSecondary,
                        fontSize = 13.sp,
                    )
                }
            } else {
                dayAppointments.forEach { apt ->
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 14.dp),
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        Text(
                            text = apt.startTime,
                            color = colors.textSecondary,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Medium,
                            modifier = Modifier.width(56.dp),
                        )
                        AppointmentSummaryCard(
                            appointment = apt,
                            subtitle = "${apt.durationText} · ${apt.location}",
                            onClick = { state.openEditAppointment(apt.id) },
                            modifier = Modifier.weight(1f),
                            height = 82.dp,
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(8.dp))
            NotasPrimaryButton(
                text = "+  Nueva cita",
                onClick = { state.openNewAppointment() },
                height = 48.dp,
                cornerRadius = 13.dp,
            )
            Spacer(modifier = Modifier.height(16.dp))
        }

        NotasBottomNavigation(
            activeTab = NotasTab.AGENDA,
            onSelectTab = state::navigateToTab,
        )
    }
}

@Composable
private fun AppointmentSummaryCard(
    appointment: AppointmentItem,
    subtitle: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    height: androidx.compose.ui.unit.Dp = 72.dp,
) {
    val colors = NotasTheme.colors
    val (_, indicatorColor) = categoryColors(appointment.category)
    Row(
        modifier = modifier
            .fillMaxWidth()
            .height(height)
            .clip(RoundedCornerShape(16.dp))
            .background(colors.surface)
            .border(
                width = if (colors.isDark) 1.dp else 0.5.dp,
                color = colors.border,
                shape = RoundedCornerShape(16.dp),
            )
            .clickable(onClick = onClick)
            .padding(vertical = 14.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Box(
            modifier = Modifier
                .width(4.dp)
                .height(height - 28.dp)
                .clip(RoundedCornerShape(2.dp))
                .background(indicatorColor)
        )
        Spacer(modifier = Modifier.width(12.dp))
        Column(modifier = Modifier.weight(1f).padding(end = 14.dp)) {
            Text(
                text = appointment.title,
                color = colors.textPrimary,
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Spacer(modifier = Modifier.height(5.dp))
            Text(
                text = subtitle,
                color = colors.textSecondary,
                fontSize = 11.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
fun Notas05NuevaCitaScreen(state: NotasAppState) {
    AppointmentFormScreen(
        state = state,
        isEdit = false,
        existingAppointment = null,
    )
}

@Composable
fun Notas06EditarCitaScreen(state: NotasAppState) {
    val existing = state.appointments.firstOrNull { it.id == state.editingAppointmentId }
        ?: state.appointments.first()
    AppointmentFormScreen(
        state = state,
        isEdit = true,
        existingAppointment = existing,
    )
}

@Composable
private fun AppointmentFormScreen(
    state: NotasAppState,
    isEdit: Boolean,
    existingAppointment: AppointmentItem?,
) {
    val colors = NotasTheme.colors
    var title by remember(isEdit, existingAppointment?.id) {
        mutableStateOf(existingAppointment?.title ?: "Revisión de propuesta")
    }
    var dateText by remember(isEdit, existingAppointment?.id) {
        mutableStateOf(existingAppointment?.dateLabel ?: "Lunes, 16 de noviembre de 2026")
    }
    var startTime by remember(isEdit, existingAppointment?.id) {
        mutableStateOf(existingAppointment?.startTime ?: "12:00")
    }
    var endTime by remember(isEdit, existingAppointment?.id) {
        mutableStateOf(existingAppointment?.endTime ?: "12:45")
    }
    var location by remember(isEdit, existingAppointment?.id) {
        mutableStateOf(existingAppointment?.location ?: "Videollamada · Notas Meet")
    }
    var notes by remember(isEdit, existingAppointment?.id) {
        mutableStateOf(existingAppointment?.notes ?: "Revisar la propuesta con el equipo.")
    }
    var reminderOn by remember(isEdit, existingAppointment?.id) {
        mutableStateOf(existingAppointment?.reminderEnabled ?: true)
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = if (isEdit) "Editar cita" else "Nueva cita",
            subtitle = if (isEdit) (existingAppointment?.title ?: "Reunión de equipo") else "Reserva tiempo para lo importante",
            actionIcon = NotasIcons.Close,
            onActionClick = { state.navigateTo(state.previousAgendaScreen) },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))
            NotasInputField(
                label = "Título de la cita",
                value = title,
                onValueChange = { title = it },
                placeholder = "Ej. Revisión de propuesta",
            )
            Spacer(modifier = Modifier.height(16.dp))
            NotasInputField(
                label = "Fecha",
                value = dateText,
                onValueChange = { dateText = it },
                placeholder = "Lunes, 16 de noviembre de 2026",
            )
            Spacer(modifier = Modifier.height(16.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(16.dp),
            ) {
                NotasInputField(
                    label = "Empieza",
                    value = startTime,
                    onValueChange = { startTime = it },
                    placeholder = "12:00",
                    modifier = Modifier.weight(1f),
                )
                NotasInputField(
                    label = "Termina",
                    value = endTime,
                    onValueChange = { endTime = it },
                    placeholder = "12:45",
                    modifier = Modifier.weight(1f),
                )
            }
            Spacer(modifier = Modifier.height(16.dp))
            NotasInputField(
                label = "Ubicación",
                value = location,
                onValueChange = { location = it },
                placeholder = "Sala o videollamada",
            )
            Spacer(modifier = Modifier.height(16.dp))
            NotasInputField(
                label = "Notas",
                value = notes,
                onValueChange = { notes = it },
                placeholder = "Detalles de la reunión",
            )
            Spacer(modifier = Modifier.height(20.dp))

            // Tarjeta recordatorio de la cita
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(60.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 15.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(
                    imageVector = NotasIcons.Bell,
                    contentDescription = null,
                    tint = colors.accentContent,
                    modifier = Modifier.size(22.dp),
                )
                Spacer(modifier = Modifier.width(12.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = "Avisarme ${state.alertAdvanceMinutes} minutos antes",
                        color = colors.accentContent,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Text(
                        text = "Ventana y sonido suave",
                        color = colors.textSecondary,
                        fontSize = 10.sp,
                    )
                }
                NotasSwitch(
                    checked = reminderOn,
                    onCheckedChange = { reminderOn = it },
                )
            }

            Spacer(modifier = Modifier.height(22.dp))
            NotasPrimaryButton(
                text = if (isEdit) "Guardar cambios" else "Crear cita",
                onClick = {
                    if (isEdit && existingAppointment != null) {
                        state.updateExistingAppointment(
                            id = existingAppointment.id,
                            title = title,
                            dateLabel = dateText,
                            startTime = startTime,
                            endTime = endTime,
                            location = location,
                            notes = notes,
                            reminderEnabled = reminderOn,
                        )
                    } else {
                        state.saveNewAppointment(
                            title = title,
                            dateLabel = dateText,
                            startTime = startTime,
                            endTime = endTime,
                            location = location,
                            notes = notes,
                            reminderEnabled = reminderOn,
                        )
                    }
                },
            )
            Spacer(modifier = Modifier.height(20.dp))
        }

        NotasModalFooter()
    }
}
