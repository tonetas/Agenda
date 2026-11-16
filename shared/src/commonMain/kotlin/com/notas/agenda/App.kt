package com.notas.agenda

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.notas.agenda.model.NotasAppState
import com.notas.agenda.model.NotasScreen
import com.notas.agenda.theme.NotasTheme
import com.notas.agenda.ui.components.NotasScreenExplorerBar
import com.notas.agenda.ui.screens.Notas01AccesoScreen
import com.notas.agenda.ui.screens.Notas02AgendaMesScreen
import com.notas.agenda.ui.screens.Notas03AgendaSemanaScreen
import com.notas.agenda.ui.screens.Notas04AgendaDiaScreen
import com.notas.agenda.ui.screens.Notas05NuevaCitaScreen
import com.notas.agenda.ui.screens.Notas06EditarCitaScreen
import com.notas.agenda.ui.screens.Notas07PersonalizacionScreen
import com.notas.agenda.ui.screens.Notas08CambiarContrasenaScreen
import com.notas.agenda.ui.screens.Notas09ConfigurarAlertasScreen
import com.notas.agenda.ui.screens.Notas11SalasDeChatScreen
import com.notas.agenda.ui.screens.Notas12CrearSalaScreen
import com.notas.agenda.ui.screens.Notas13InvitarCompanerosScreen
import com.notas.agenda.ui.screens.Notas14AceptarInvitacionScreen
import com.notas.agenda.ui.screens.Notas15ConversacionScreen

@Composable
fun NotasApp() {
    val state = remember { NotasAppState() }

    NotasTheme(
        isDark = state.isDarkMode,
        accentOption = state.accentOption,
    ) {
        val colors = NotasTheme.colors
        val outerBackdrop = if (colors.isDark) Color(0xFF0A0F1C) else Color(0xFFE9ECF5)

        BoxWithConstraints(
            modifier = Modifier
                .fillMaxSize()
                .background(if (colors.isDark) outerBackdrop else colors.background),
        ) {
            val isWideViewport = maxWidth > 520.dp

            if (isWideViewport) {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(outerBackdrop)
                        .padding(vertical = 10.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    NotasScreenExplorerBar(
                        currentScreen = state.currentScreen,
                        onSelectScreen = state::navigateTo,
                        modifier = Modifier.widthIn(max = 960.dp),
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .padding(bottom = 8.dp),
                        contentAlignment = Alignment.Center,
                    ) {
                        Box(
                            modifier = Modifier
                                .widthIn(max = 396.dp)
                                .fillMaxWidth()
                                .heightIn(max = 860.dp)
                                .fillMaxHeight()
                                .shadow(24.dp, RoundedCornerShape(28.dp))
                                .clip(RoundedCornerShape(28.dp))
                                .border(1.dp, colors.border, RoundedCornerShape(28.dp))
                                .background(colors.background),
                        ) {
                            NotasScreenRouter(state)
                        }
                    }
                }
            } else {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(colors.background),
                ) {
                    NotasScreenRouter(state)
                }
            }
        }
    }
}

@Composable
private fun NotasScreenRouter(state: NotasAppState) {
    when (state.currentScreen) {
        NotasScreen.LOGIN -> Notas01AccesoScreen(state)
        NotasScreen.AGENDA_MONTH -> Notas02AgendaMesScreen(state)
        NotasScreen.AGENDA_WEEK -> Notas03AgendaSemanaScreen(state)
        NotasScreen.AGENDA_DAY -> Notas04AgendaDiaScreen(state)
        NotasScreen.NEW_APPOINTMENT -> Notas05NuevaCitaScreen(state)
        NotasScreen.EDIT_APPOINTMENT -> Notas06EditarCitaScreen(state)
        NotasScreen.PERSONALIZATION -> Notas07PersonalizacionScreen(state, nightModeScreen = false)
        NotasScreen.CHANGE_PASSWORD -> Notas08CambiarContrasenaScreen(state)
        NotasScreen.CONFIGURE_ALERTS -> Notas09ConfigurarAlertasScreen(state)
        NotasScreen.CHAT_ROOMS -> Notas11SalasDeChatScreen(state)
        NotasScreen.CREATE_ROOM -> Notas12CrearSalaScreen(state)
        NotasScreen.INVITE_TEAM -> Notas13InvitarCompanerosScreen(state)
        NotasScreen.ACCEPT_INVITATION -> Notas14AceptarInvitacionScreen(state)
        NotasScreen.CONVERSATION -> Notas15ConversacionScreen(state)
        NotasScreen.NIGHT_APPEARANCE -> Notas07PersonalizacionScreen(state, nightModeScreen = true)
    }
}
