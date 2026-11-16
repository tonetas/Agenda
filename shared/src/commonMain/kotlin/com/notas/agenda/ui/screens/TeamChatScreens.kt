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
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
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
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.notas.agenda.model.ChatMessage
import com.notas.agenda.model.ChatRoom
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
import com.notas.agenda.ui.components.NotasSoftButton
import com.notas.agenda.ui.components.NotasTopStatusBar
import com.notas.agenda.ui.components.categoryColors
import com.notas.agenda.ui.icons.NotasIcons

@Composable
private fun NotasSearchBar(
    query: String,
    onQueryChange: (String) -> Unit,
    placeholder: String = "Buscar en el equipo",
) {
    val colors = NotasTheme.colors
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(50.dp)
            .clip(RoundedCornerShape(14.dp))
            .background(colors.surface)
            .border(
                width = if (colors.isDark) 1.dp else 0.5.dp,
                color = colors.border,
                shape = RoundedCornerShape(14.dp),
            )
            .padding(horizontal = 15.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(
            imageVector = NotasIcons.Search,
            contentDescription = "Buscar",
            tint = colors.textSecondary,
            modifier = Modifier.size(20.dp),
        )
        Spacer(modifier = Modifier.width(12.dp))
        Box(modifier = Modifier.weight(1f)) {
            if (query.isEmpty()) {
                Text(
                    text = placeholder,
                    color = colors.textSecondary,
                    fontSize = 12.sp,
                )
            }
            BasicTextField(
                value = query,
                onValueChange = onQueryChange,
                singleLine = true,
                textStyle = TextStyle(
                    color = colors.textPrimary,
                    fontSize = 13.sp,
                ),
                cursorBrush = SolidColor(colors.accentButton),
                modifier = Modifier.fillMaxWidth(),
            )
        }
    }
}

@Composable
fun Notas11SalasDeChatScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    val filteredRooms = state.rooms.filter { room ->
        state.roomSearchQuery.isBlank() ||
            room.name.contains(state.roomSearchQuery, ignoreCase = true) ||
            room.lastPreview.contains(state.roomSearchQuery, ignoreCase = true)
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Tu equipo",
            subtitle = "Conversaciones que nos conectan",
            actionIcon = NotasIcons.Plus,
            onActionClick = { state.navigateTo(NotasScreen.CREATE_ROOM) },
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
            NotasSearchBar(
                query = state.roomSearchQuery,
                onQueryChange = { state.roomSearchQuery = it },
            )

            if (state.hasPendingInvitation) {
                Spacer(modifier = Modifier.height(18.dp))
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(74.dp)
                        .clip(RoundedCornerShape(16.dp))
                        .background(colors.accentContainer)
                        .clickable { state.navigateTo(NotasScreen.ACCEPT_INVITATION) }
                        .padding(horizontal = 16.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = "Una invitación te espera",
                            color = colors.accentContent,
                            fontSize = 14.sp,
                            fontWeight = FontWeight.SemiBold,
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "Elena te invita a Laboratorio de ideas",
                            color = colors.textSecondary,
                            fontSize = 10.sp,
                        )
                    }
                    Icon(
                        imageVector = NotasIcons.ChevronRight,
                        contentDescription = null,
                        tint = colors.accentContent,
                        modifier = Modifier.size(22.dp),
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(
                    text = "TUS SALAS",
                    color = colors.textSecondary,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold,
                )
                Box(
                    modifier = Modifier
                        .height(25.dp)
                        .clip(RoundedCornerShape(12.dp))
                        .background(colors.accentContainer)
                        .padding(horizontal = 10.dp),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = "${filteredRooms.size} salas",
                        color = colors.accentContent,
                        fontSize = 10.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                }
            }

            Spacer(modifier = Modifier.height(14.dp))
            filteredRooms.forEach { room ->
                RoomCard(
                    room = room,
                    onClick = { state.openRoom(room.id) },
                )
                Spacer(modifier = Modifier.height(14.dp))
            }

            // Aviso permanente de historial
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 16.dp, vertical = 16.dp),
                verticalAlignment = Alignment.Top,
            ) {
                Icon(
                    imageVector = NotasIcons.Lock,
                    contentDescription = null,
                    tint = colors.accentContent,
                    modifier = Modifier.size(20.dp),
                )
                Spacer(modifier = Modifier.width(12.dp))
                Column {
                    Text(
                        text = "El historial se conserva",
                        color = colors.accentContent,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Spacer(modifier = Modifier.height(3.dp))
                    Text(
                        text = "No se pueden borrar salas ni mensajes.",
                        color = colors.textSecondary,
                        fontSize = 11.sp,
                    )
                }
            }
            Spacer(modifier = Modifier.height(18.dp))
        }

        NotasBottomNavigation(
            activeTab = NotasTab.TEAM,
            onSelectTab = state::navigateToTab,
        )
    }
}

@Composable
private fun RoomCard(
    room: ChatRoom,
    onClick: () -> Unit,
) {
    val colors = NotasTheme.colors
    val (badgeBg, badgeFg) = categoryColors(room.category)
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(86.dp)
            .clip(RoundedCornerShape(16.dp))
            .background(colors.surface)
            .border(
                width = if (colors.isDark) 1.dp else 0.5.dp,
                color = colors.border,
                shape = RoundedCornerShape(16.dp),
            )
            .clickable(onClick = onClick)
            .padding(horizontal = 14.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Box(
            modifier = Modifier
                .size(46.dp)
                .clip(RoundedCornerShape(14.dp))
                .background(badgeBg),
            contentAlignment = Alignment.Center,
        ) {
            Text(
                text = "#",
                color = badgeFg,
                fontSize = 22.sp,
                fontWeight = FontWeight.SemiBold,
            )
        }
        Spacer(modifier = Modifier.width(13.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = room.name,
                color = colors.textPrimary,
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Spacer(modifier = Modifier.height(5.dp))
            Text(
                text = room.lastPreview,
                color = colors.textSecondary,
                fontSize = 11.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
        if (room.unreadCount > 0) {
            Spacer(modifier = Modifier.width(10.dp))
            Box(
                modifier = Modifier
                    .size(24.dp)
                    .clip(CircleShape)
                    .background(colors.accentButton),
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    text = room.unreadCount.toString(),
                    color = Color.White,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.SemiBold,
                )
            }
        }
    }
}

@Composable
fun Notas12CrearSalaScreen(state: NotasAppState) {
    val colors = NotasTheme.colors

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Crear una sala",
            subtitle = "Un espacio para cada proyecto",
            actionIcon = NotasIcons.Close,
            onActionClick = { state.navigateTo(NotasScreen.CHAT_ROOMS) },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))
            NotasInputField(
                label = "Nombre de la sala",
                value = state.draftRoomName,
                onValueChange = { state.draftRoomName = it },
                placeholder = "Ej. Proyecto Aurora",
            )
            Spacer(modifier = Modifier.height(20.dp))
            NotasInputField(
                label = "Descripción",
                value = state.draftRoomDescription,
                onValueChange = { state.draftRoomDescription = it },
                placeholder = "Ideas, entregas y decisiones del proyecto.",
                singleLine = false,
                minHeight = 88.dp,
            )

            Spacer(modifier = Modifier.height(26.dp))
            Text(
                text = "QUIÉN PUEDE ENTRAR",
                color = colors.textSecondary,
                fontSize = 10.sp,
                fontWeight = FontWeight.Bold,
            )
            Spacer(modifier = Modifier.height(12.dp))

            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(78.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(16.dp),
                    )
                    .padding(horizontal = 17.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(
                    imageVector = NotasIcons.Lock,
                    contentDescription = null,
                    tint = colors.accentContent,
                    modifier = Modifier.size(22.dp),
                )
                Spacer(modifier = Modifier.width(14.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = "Solo por invitación",
                        color = colors.textPrimary,
                        fontSize = 14.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Spacer(modifier = Modifier.height(3.dp))
                    Text(
                        text = "Tú eliges a tus compañeros",
                        color = colors.textSecondary,
                        fontSize = 11.sp,
                    )
                }
                Box(
                    modifier = Modifier
                        .size(22.dp)
                        .clip(CircleShape)
                        .background(colors.accentButton),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = "✓",
                        color = Color.White,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                }
            }

            Spacer(modifier = Modifier.height(22.dp))
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 16.dp, vertical = 16.dp),
                verticalAlignment = Alignment.Top,
            ) {
                Icon(
                    imageVector = NotasIcons.Lock,
                    contentDescription = null,
                    tint = colors.accentContent,
                    modifier = Modifier.size(20.dp),
                )
                Spacer(modifier = Modifier.width(12.dp))
                Column {
                    Text(
                        text = "Un espacio permanente",
                        color = colors.accentContent,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Spacer(modifier = Modifier.height(3.dp))
                    Text(
                        text = "La sala y sus mensajes no se podrán borrar.",
                        color = colors.textSecondary,
                        fontSize = 11.sp,
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text(
                text = "En el siguiente paso podrás invitar al equipo.",
                color = colors.textSecondary,
                fontSize = 11.sp,
            )

            Spacer(modifier = Modifier.height(24.dp))
            NotasPrimaryButton(
                text = "Crear y elegir compañeros",
                onClick = { state.navigateTo(NotasScreen.INVITE_TEAM) },
            )
            Spacer(modifier = Modifier.height(20.dp))
        }

        NotasModalFooter()
    }
}

@Composable
fun Notas13InvitarCompanerosScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    val filteredTeammates = state.teammates.filter { mate ->
        state.teammateSearchQuery.isBlank() ||
            mate.name.contains(state.teammateSearchQuery, ignoreCase = true) ||
            mate.role.contains(state.teammateSearchQuery, ignoreCase = true)
    }
    val selectedCount = state.selectedTeammateIds.size
    val roomSubtitle = "Sala · ${state.draftRoomName.ifBlank { "Proyecto Aurora" }}"

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Invitar al equipo",
            subtitle = roomSubtitle,
            actionIcon = NotasIcons.Close,
            onActionClick = { state.navigateTo(NotasScreen.CHAT_ROOMS) },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))
            NotasSearchBar(
                query = state.teammateSearchQuery,
                onQueryChange = { state.teammateSearchQuery = it },
            )

            Spacer(modifier = Modifier.height(16.dp))
            Box(
                modifier = Modifier
                    .height(25.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 10.dp),
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    text = "$selectedCount seleccionados",
                    color = colors.accentContent,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.SemiBold,
                )
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text(
                text = "COMPAÑEROS DE NOTAS",
                color = colors.textSecondary,
                fontSize = 10.sp,
                fontWeight = FontWeight.Bold,
            )
            Spacer(modifier = Modifier.height(12.dp))

            filteredTeammates.forEach { mate ->
                val selected = state.selectedTeammateIds.contains(mate.id)
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
                        .clickable { state.toggleTeammateSelection(mate.id) }
                        .padding(horizontal = 17.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = mate.name,
                            color = colors.textPrimary,
                            fontSize = 14.sp,
                            fontWeight = FontWeight.SemiBold,
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = mate.role,
                            color = colors.textSecondary,
                            fontSize = 11.sp,
                        )
                    }
                    Box(
                        modifier = Modifier
                            .size(24.dp)
                            .clip(RoundedCornerShape(7.dp))
                            .background(if (selected) colors.accentButton else colors.surface)
                            .border(
                                width = if (selected) 0.dp else 1.dp,
                                color = if (selected) Color.Transparent else colors.checkboxBorder,
                                shape = RoundedCornerShape(7.dp),
                            ),
                        contentAlignment = Alignment.Center,
                    ) {
                        if (selected) {
                            Text(
                                text = "✓",
                                color = Color.White,
                                fontSize = 14.sp,
                                fontWeight = FontWeight.SemiBold,
                            )
                        }
                    }
                }
                Spacer(modifier = Modifier.height(12.dp))
            }

            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Recibirán una invitación para aceptar la sala.",
                color = colors.textSecondary,
                fontSize = 11.sp,
            )
            Spacer(modifier = Modifier.height(22.dp))
            val btnLabel = if (selectedCount == 1) {
                "Enviar 1 invitación"
            } else {
                "Enviar $selectedCount invitaciones"
            }
            NotasPrimaryButton(
                text = btnLabel,
                onClick = { state.sendRoomInvitations() },
            )
            Spacer(modifier = Modifier.height(20.dp))
        }

        NotasModalFooter()
    }
}

@Composable
fun Notas14AceptarInvitacionScreen(state: NotasAppState) {
    val colors = NotasTheme.colors

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Invitaciones",
            subtitle = "Tienes una nueva invitación",
            actionIcon = NotasIcons.Bell,
            onActionClick = { state.navigateTo(NotasScreen.CONFIGURE_ALERTS) },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(8.dp))
            Box(
                modifier = Modifier
                    .height(25.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 10.dp),
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    text = "RECIBIDA HOY",
                    color = colors.accentContent,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.SemiBold,
                )
            }

            Spacer(modifier = Modifier.height(22.dp))

            // Tarjeta principal de invitación
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
                    .padding(24.dp),
            ) {
                Box(
                    modifier = Modifier
                        .size(58.dp)
                        .clip(RoundedCornerShape(18.dp))
                        .background(colors.successContainer),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = "#",
                        color = colors.successContent,
                        fontSize = 28.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                }
                Spacer(modifier = Modifier.height(22.dp))
                Text(
                    text = "Laboratorio\nde ideas",
                    color = colors.textPrimary,
                    fontSize = 27.sp,
                    fontWeight = FontWeight.SemiBold,
                    lineHeight = 32.sp,
                )
                Spacer(modifier = Modifier.height(10.dp))
                Text(
                    text = "Elena Torres te invita a su sala.",
                    color = colors.textSecondary,
                    fontSize = 13.sp,
                )
                Spacer(modifier = Modifier.height(16.dp))
                Text(
                    text = "Un lugar para compartir propuestas,\ninspiración y próximos retos.",
                    color = colors.textPrimary,
                    fontSize = 13.sp,
                    lineHeight = 19.sp,
                )
                Spacer(modifier = Modifier.height(22.dp))
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(1.dp)
                        .background(colors.border)
                )
                Spacer(modifier = Modifier.height(16.dp))
                Text(
                    text = "5 compañeros ya participan",
                    color = colors.successContent,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Medium,
                )
            }

            Spacer(modifier = Modifier.height(24.dp))
            NotasPrimaryButton(
                text = "Aceptar y entrar",
                onClick = { state.acceptPendingInvitation() },
            )
            Spacer(modifier = Modifier.height(14.dp))
            NotasSoftButton(
                text = "Ahora no",
                onClick = { state.navigateTo(NotasScreen.CHAT_ROOMS) },
            )
            Spacer(modifier = Modifier.height(20.dp))
            Text(
                text = "El historial estará disponible cuando entres.\nLas salas y los mensajes no se pueden borrar.",
                color = colors.textSecondary,
                fontSize = 11.sp,
                lineHeight = 16.sp,
            )
            Spacer(modifier = Modifier.height(16.dp))
        }

        NotasBottomNavigation(
            activeTab = NotasTab.TEAM,
            onSelectTab = state::navigateToTab,
        )
    }
}

@Composable
fun Notas15ConversacionScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    val room = state.activeRoom()
    var messageDraft by remember(room.id) { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = room.name,
            subtitle = "${room.memberCount} compañeros · ${room.onlineCount} en línea",
            actionIcon = NotasIcons.Bell,
            onActionClick = { state.navigateTo(NotasScreen.CONFIGURE_ALERTS) },
            backText = "Salas",
            onBackClick = { state.navigateTo(NotasScreen.CHAT_ROOMS) },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(4.dp))

            // Banner de historial permanente
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(54.dp)
                    .clip(RoundedCornerShape(14.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 14.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(
                    imageVector = NotasIcons.Lock,
                    contentDescription = null,
                    tint = colors.accentContent,
                    modifier = Modifier.size(19.dp),
                )
                Spacer(modifier = Modifier.width(10.dp))
                Text(
                    text = "Los mensajes no se pueden borrar.",
                    color = colors.accentContent,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Medium,
                )
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text(
                text = "HOY · 16 NOVIEMBRE",
                color = colors.textSecondary,
                fontSize = 9.sp,
                fontWeight = FontWeight.SemiBold,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth(),
            )
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = room.joinNotice,
                color = colors.textSecondary,
                fontSize = 10.sp,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth(),
            )
            Spacer(modifier = Modifier.height(20.dp))

            room.messages.forEach { message ->
                MessageBubble(message = message)
                Spacer(modifier = Modifier.height(16.dp))
            }
            Spacer(modifier = Modifier.height(8.dp))
        }

        // Barra para escribir mensaje
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 24.dp, vertical = 10.dp)
                .height(58.dp)
                .clip(RoundedCornerShape(17.dp))
                .background(colors.surface)
                .border(1.dp, colors.border, RoundedCornerShape(17.dp))
                .padding(start = 15.dp, end = 9.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(modifier = Modifier.weight(1f)) {
                if (messageDraft.isEmpty()) {
                    Text(
                        text = "Escribe a tu equipo…",
                        color = colors.textSecondary,
                        fontSize = 12.sp,
                    )
                }
                BasicTextField(
                    value = messageDraft,
                    onValueChange = { messageDraft = it },
                    singleLine = true,
                    textStyle = TextStyle(
                        color = colors.textPrimary,
                        fontSize = 13.sp,
                    ),
                    cursorBrush = SolidColor(colors.accentButton),
                    modifier = Modifier.fillMaxWidth(),
                )
            }
            Spacer(modifier = Modifier.width(8.dp))
            Box(
                modifier = Modifier
                    .size(40.dp)
                    .clip(RoundedCornerShape(13.dp))
                    .background(colors.accentButton)
                    .clickable {
                        if (messageDraft.isNotBlank()) {
                            state.sendMessageToActiveRoom(messageDraft)
                            messageDraft = ""
                        }
                    },
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = NotasIcons.Send,
                    contentDescription = "Enviar mensaje",
                    tint = Color.White,
                    modifier = Modifier.size(20.dp),
                )
            }
        }

        NotasBottomNavigation(
            activeTab = NotasTab.TEAM,
            onSelectTab = state::navigateToTab,
        )
    }
}

@Composable
private fun MessageBubble(message: ChatMessage) {
    val colors = NotasTheme.colors
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = if (message.isOutgoing) Arrangement.End else Arrangement.Start,
    ) {
        Column(
            modifier = Modifier
                .widthIn(max = 286.dp)
                .clip(RoundedCornerShape(17.dp))
                .background(if (message.isOutgoing) colors.accentButton else colors.surface)
                .border(
                    width = if (message.isOutgoing || !colors.isDark) 0.dp else 1.dp,
                    color = colors.border,
                    shape = RoundedCornerShape(17.dp),
                )
                .padding(horizontal = 16.dp, vertical = 13.dp),
        ) {
            Text(
                text = message.sender,
                color = if (message.isOutgoing) colors.outgoingSubtext else colors.accentContent,
                fontSize = 10.sp,
                fontWeight = FontWeight.SemiBold,
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = message.body,
                color = if (message.isOutgoing) Color.White else colors.textPrimary,
                fontSize = 13.sp,
                lineHeight = 18.sp,
            )
            Spacer(modifier = Modifier.height(10.dp))
            Text(
                text = message.statusText ?: message.time,
                color = if (message.isOutgoing) colors.outgoingSubtext else colors.textSecondary,
                fontSize = 9.sp,
                modifier = if (message.isOutgoing) Modifier.align(Alignment.End) else Modifier,
            )
        }
    }
}
