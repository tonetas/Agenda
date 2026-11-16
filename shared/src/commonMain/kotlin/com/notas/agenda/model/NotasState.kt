package com.notas.agenda.model

import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import com.notas.agenda.theme.NotasAccentOption

enum class NotasScreen(val code: String, val shortTitle: String) {
    LOGIN("01", "Acceso"),
    AGENDA_MONTH("02", "Agenda · Mes"),
    AGENDA_WEEK("03", "Agenda · Semana"),
    AGENDA_DAY("04", "Agenda · Día"),
    NEW_APPOINTMENT("05", "Nueva cita"),
    EDIT_APPOINTMENT("06", "Editar cita"),
    PERSONALIZATION("07", "Personalización"),
    CHANGE_PASSWORD("08", "Cambiar contraseña"),
    CONFIGURE_ALERTS("09", "Configurar alertas"),
    CHAT_ROOMS("11", "Salas de chat"),
    CREATE_ROOM("12", "Crear sala"),
    INVITE_TEAM("13", "Invitar compañeros"),
    ACCEPT_INVITATION("14", "Aceptar invitación"),
    CONVERSATION("15", "Conversación"),
    NIGHT_APPEARANCE("16", "Apariencia nocturna"),
}

enum class NotasTab {
    AGENDA,
    TEAM,
    SETTINGS,
}

enum class AppointmentCategory {
    PRIMARY,
    GREEN,
    AMBER,
}

data class AppointmentItem(
    val id: String,
    val title: String,
    val weekShortLabel: String,
    val dayOfMonth: Int,
    val dateLabel: String,
    val startTime: String,
    val endTime: String,
    val durationText: String,
    val location: String,
    val notes: String,
    val reminderEnabled: Boolean,
    val category: AppointmentCategory,
)

data class ChatMessage(
    val id: String,
    val sender: String,
    val body: String,
    val time: String,
    val isOutgoing: Boolean,
    val statusText: String? = null,
)

data class ChatRoom(
    val id: String,
    val name: String,
    val description: String,
    val category: AppointmentCategory,
    val unreadCount: Int,
    val memberCount: Int,
    val onlineCount: Int,
    val joinNotice: String,
    val messages: List<ChatMessage>,
) {
    val lastPreview: String
        get() {
            val last = messages.lastOrNull() ?: return description
            val prefix = if (last.isOutgoing) "Tú" else last.sender
            return "$prefix: ${last.body}"
        }
}

data class Teammate(
    val id: String,
    val name: String,
    val role: String,
)

@Stable
class NotasAppState {
    var currentScreen by mutableStateOf(NotasScreen.LOGIN)
    var previousAgendaScreen by mutableStateOf(NotasScreen.AGENDA_MONTH)

    // Apariencia y cuenta
    var isDarkMode by mutableStateOf(false)
    var accentOption by mutableStateOf(NotasAccentOption.VIOLET)
    var userName by mutableStateOf("Antonio Gomez")
    var userRole by mutableStateOf("Producto y diseño · Notas")
    var userEmail by mutableStateOf("antonio@gomex.com")
    var loginPassword by mutableStateOf("NotasAgend1!")

    // Alertas
    var remindersEnabled by mutableStateOf(true)
    var alertAdvanceMinutes by mutableStateOf(5)
    var modalAlertEnabled by mutableStateOf(true)
    var soundAlertEnabled by mutableStateOf(true)
    var selectedTone by mutableStateOf("Campana suave")

    // Agenda
    var selectedDayOfMonth by mutableStateOf(16)
    var monthOffset by mutableStateOf(0)
    var editingAppointmentId by mutableStateOf<String?>(null)

    val appointments = mutableStateListOf(
        AppointmentItem(
            id = "apt_1",
            title = "Reunión de equipo",
            weekShortLabel = "Equipo",
            dayOfMonth = 16,
            dateLabel = "Lunes, 16 de noviembre de 2026",
            startTime = "10:00",
            endTime = "10:45",
            durationText = "45 min",
            location = "Sala Notas",
            notes = "Objetivos y prioridades de la semana.",
            reminderEnabled = true,
            category = AppointmentCategory.PRIMARY,
        ),
        AppointmentItem(
            id = "apt_2",
            title = "Proyecto Aurora",
            weekShortLabel = "Aurora",
            dayOfMonth = 16,
            dateLabel = "Lunes, 16 de noviembre de 2026",
            startTime = "14:00",
            endTime = "15:00",
            durationText = "1 h",
            location = "Videollamada",
            notes = "Revisión de avances con diseño y frontend.",
            reminderEnabled = true,
            category = AppointmentCategory.GREEN,
        ),
        AppointmentItem(
            id = "apt_3",
            title = "Cierre del día",
            weekShortLabel = "Cierre",
            dayOfMonth = 16,
            dateLabel = "Lunes, 16 de noviembre de 2026",
            startTime = "16:00",
            endTime = "16:30",
            durationText = "30 min",
            location = "Equipo de producto",
            notes = "Resumen de bloqueos y próximos pasos.",
            reminderEnabled = true,
            category = AppointmentCategory.AMBER,
        ),
        AppointmentItem(
            id = "apt_4",
            title = "Sesión de foco",
            weekShortLabel = "Foco",
            dayOfMonth = 17,
            dateLabel = "Martes, 17 de noviembre de 2026",
            startTime = "11:00",
            endTime = "12:00",
            durationText = "1 h",
            location = "Espacio silencioso",
            notes = "Prototipado de componentes compartidos.",
            reminderEnabled = true,
            category = AppointmentCategory.GREEN,
        ),
        AppointmentItem(
            id = "apt_5",
            title = "Revisión de diseño",
            weekShortLabel = "Diseño",
            dayOfMonth = 18,
            dateLabel = "Miércoles, 18 de noviembre de 2026",
            startTime = "10:00",
            endTime = "10:45",
            durationText = "45 min",
            location = "Sala Notas",
            notes = "Validación visual en móvil, web y desktop.",
            reminderEnabled = true,
            category = AppointmentCategory.PRIMARY,
        ),
        AppointmentItem(
            id = "apt_6",
            title = "Demo semanal",
            weekShortLabel = "Demo",
            dayOfMonth = 18,
            dateLabel = "Miércoles, 18 de noviembre de 2026",
            startTime = "13:00",
            endTime = "13:45",
            durationText = "45 min",
            location = "Videollamada · Notas Meet",
            notes = "Presentación de funcionalidades.",
            reminderEnabled = true,
            category = AppointmentCategory.AMBER,
        ),
        AppointmentItem(
            id = "apt_7",
            title = "Sincronización Aurora",
            weekShortLabel = "Aurora",
            dayOfMonth = 19,
            dateLabel = "Jueves, 19 de noviembre de 2026",
            startTime = "12:00",
            endTime = "13:00",
            durationText = "1 h",
            location = "Videollamada",
            notes = "Estado de entregas del sprint.",
            reminderEnabled = true,
            category = AppointmentCategory.GREEN,
        ),
        AppointmentItem(
            id = "apt_8",
            title = "Planificación equipo",
            weekShortLabel = "Equipo",
            dayOfMonth = 20,
            dateLabel = "Viernes, 20 de noviembre de 2026",
            startTime = "10:00",
            endTime = "10:45",
            durationText = "45 min",
            location = "Sala Notas",
            notes = "Preparación de la siguiente semana.",
            reminderEnabled = true,
            category = AppointmentCategory.PRIMARY,
        ),
        AppointmentItem(
            id = "apt_9",
            title = "Cierre semanal",
            weekShortLabel = "Cierre",
            dayOfMonth = 20,
            dateLabel = "Viernes, 20 de noviembre de 2026",
            startTime = "14:00",
            endTime = "14:45",
            durationText = "45 min",
            location = "Equipo de producto",
            notes = "Retrospectiva rápida del equipo.",
            reminderEnabled = false,
            category = AppointmentCategory.AMBER,
        ),
    )

    // Equipo y salas de chat
    var hasPendingInvitation by mutableStateOf(true)
    var roomSearchQuery by mutableStateOf("")
    var teammateSearchQuery by mutableStateOf("")
    var draftRoomName by mutableStateOf("Proyecto final")
    var draftRoomDescription by mutableStateOf("Ideas, entregas y decisiones del proyecto.")
    val selectedTeammateIds = mutableStateListOf("t_sergio", "t_marta")

    val teammates = listOf(
        Teammate("t_sergio", "Sergio Ruiz", "Diseño de producto"),
        Teammate("t_marta", "Marta López", "Desarrollo frontend"),
        Teammate("t_alex", "Álex Romero", "Operaciones"),
        Teammate("t_elena", "Elena Torres", "Dirección de producto"),
    )

    val rooms = mutableStateListOf(
        ChatRoom(
            id = "room_general",
            name = "General",
            description = "Novedades diarias del estudio",
            category = AppointmentCategory.PRIMARY,
            unreadCount = 2,
            memberCount = 5,
            onlineCount = 3,
            joinNotice = "Todo el equipo conectado en General",
            messages = listOf(
                ChatMessage(
                    id = "g1",
                    sender = "Sergio",
                    body = "¡Buenos días, equipo!",
                    time = "09:10",
                    isOutgoing = false,
                ),
            ),
        ),
        ChatRoom(
            id = "room_aurora",
            name = "Proyecto Aurora",
            description = "Ideas, entregas y decisiones del proyecto.",
            category = AppointmentCategory.GREEN,
            unreadCount = 0,
            memberCount = 3,
            onlineCount = 2,
            joinNotice = "Sergio y Marta se han unido a la sala",
            messages = listOf(
                ChatMessage(
                    id = "a1",
                    sender = "Sergio",
                    body = "¡Buenos días! La propuesta de Aurora ya está en la carpeta del equipo.",
                    time = "09:24",
                    isOutgoing = false,
                ),
                ChatMessage(
                    id = "a2",
                    sender = "Marta",
                    body = "Genial. La revisamos en la reunión de las 14:00.",
                    time = "09:24",
                    isOutgoing = false,
                ),
                ChatMessage(
                    id = "a3",
                    sender = "Tú",
                    body = "Perfecto, nos vemos a las 14:00. Gracias, equipo.",
                    time = "09:28",
                    isOutgoing = true,
                    statusText = "09:28 · Leído",
                ),
            ),
        ),
        ChatRoom(
            id = "room_producto",
            name = "Producto",
            description = "Prototipos, UX y entregas",
            category = AppointmentCategory.AMBER,
            unreadCount = 1,
            memberCount = 4,
            onlineCount = 2,
            joinNotice = "Marta compartió una actualización",
            messages = listOf(
                ChatMessage(
                    id = "p1",
                    sender = "Marta",
                    body = "Ya está listo el prototipo",
                    time = "09:35",
                    isOutgoing = false,
                ),
            ),
        ),
    )

    var activeRoomId by mutableStateOf("room_aurora")
    var feedbackMessage by mutableStateOf<String?>(null)

    fun activeRoom(): ChatRoom = rooms.firstOrNull { it.id == activeRoomId } ?: rooms.first()

    fun navigateTo(screen: NotasScreen) {
        when (screen) {
            NotasScreen.AGENDA_MONTH, NotasScreen.AGENDA_WEEK, NotasScreen.AGENDA_DAY -> {
                previousAgendaScreen = screen
            }
            NotasScreen.NIGHT_APPEARANCE -> {
                isDarkMode = true
            }
            NotasScreen.PERSONALIZATION -> {
                // Mantiene el modo actual o permite alternar
            }
            else -> Unit
        }
        currentScreen = screen
        feedbackMessage = null
    }

    fun navigateToTab(tab: NotasTab) {
        when (tab) {
            NotasTab.AGENDA -> navigateTo(previousAgendaScreen)
            NotasTab.TEAM -> navigateTo(NotasScreen.CHAT_ROOMS)
            NotasTab.SETTINGS -> navigateTo(if (isDarkMode) NotasScreen.NIGHT_APPEARANCE else NotasScreen.PERSONALIZATION)
        }
    }

    fun openNewAppointment() {
        editingAppointmentId = null
        currentScreen = NotasScreen.NEW_APPOINTMENT
    }

    fun openEditAppointment(appointmentId: String) {
        editingAppointmentId = appointmentId
        currentScreen = NotasScreen.EDIT_APPOINTMENT
    }

    fun saveNewAppointment(
        title: String,
        dateLabel: String,
        startTime: String,
        endTime: String,
        location: String,
        notes: String,
        reminderEnabled: Boolean,
    ) {
        val cleanTitle = title.trim().ifEmpty { "Revisión de propuesta" }
        val short = cleanTitle.split(" ").firstOrNull()?.take(8) ?: "Cita"
        appointments.add(
            AppointmentItem(
                id = "apt_${appointments.size + 1}",
                title = cleanTitle,
                weekShortLabel = short,
                dayOfMonth = selectedDayOfMonth,
                dateLabel = dateLabel.ifBlank { "Lunes, $selectedDayOfMonth de noviembre de 2026" },
                startTime = startTime.ifBlank { "12:00" },
                endTime = endTime.ifBlank { "12:45" },
                durationText = "45 min",
                location = location.ifBlank { "Videollamada · Notas Meet" },
                notes = notes,
                reminderEnabled = reminderEnabled,
                category = AppointmentCategory.PRIMARY,
            )
        )
        currentScreen = previousAgendaScreen
        feedbackMessage = "Cita creada en tu agenda"
    }

    fun updateExistingAppointment(
        id: String,
        title: String,
        dateLabel: String,
        startTime: String,
        endTime: String,
        location: String,
        notes: String,
        reminderEnabled: Boolean,
    ) {
        val index = appointments.indexOfFirst { it.id == id }
        if (index >= 0) {
            val existing = appointments[index]
            val cleanTitle = title.trim().ifEmpty { existing.title }
            appointments[index] = existing.copy(
                title = cleanTitle,
                weekShortLabel = cleanTitle.split(" ").firstOrNull()?.take(8) ?: existing.weekShortLabel,
                dateLabel = dateLabel.ifBlank { existing.dateLabel },
                startTime = startTime.ifBlank { existing.startTime },
                endTime = endTime.ifBlank { existing.endTime },
                location = location.ifBlank { existing.location },
                notes = notes,
                reminderEnabled = reminderEnabled,
            )
        }
        currentScreen = previousAgendaScreen
        feedbackMessage = "Cambios guardados"
    }

    fun toggleTeammateSelection(id: String) {
        if (selectedTeammateIds.contains(id)) {
            selectedTeammateIds.remove(id)
        } else {
            selectedTeammateIds.add(id)
        }
    }

    fun sendRoomInvitations() {
        val cleanName = draftRoomName.trim().ifEmpty { "Nueva sala" }
        val existing = rooms.firstOrNull { it.name.equals(cleanName, ignoreCase = true) }
        if (existing != null) {
            activeRoomId = existing.id
        } else {
            val newId = "room_${rooms.size + 1}"
            val invitedCount = selectedTeammateIds.size.coerceAtLeast(1)
            val invitedNames = teammates
                .filter { selectedTeammateIds.contains(it.id) }
                .joinToString(" y ") { it.name.substringBefore(" ") }
                .ifEmpty { "El equipo" }
            rooms.add(
                0,
                ChatRoom(
                    id = newId,
                    name = cleanName,
                    description = draftRoomDescription.ifBlank { "Espacio permanente del equipo." },
                    category = AppointmentCategory.PRIMARY,
                    unreadCount = 0,
                    memberCount = invitedCount + 1,
                    onlineCount = 2,
                    joinNotice = "$invitedNames se han unido a la sala",
                    messages = listOf(
                        ChatMessage(
                            id = "${newId}_m1",
                            sender = "Sergio",
                            body = "¡Sala creada! Aquí compartimos todo sobre $cleanName.",
                            time = "09:41",
                            isOutgoing = false,
                        )
                    ),
                )
            )
            activeRoomId = newId
        }
        currentScreen = NotasScreen.CONVERSATION
        feedbackMessage = "Invitaciones enviadas"
    }

    fun acceptPendingInvitation() {
        val labId = "room_lab"
        if (rooms.none { it.id == labId }) {
            rooms.add(
                0,
                ChatRoom(
                    id = labId,
                    name = "Laboratorio de ideas",
                    description = "Un lugar para compartir propuestas, inspiración y próximos retos.",
                    category = AppointmentCategory.GREEN,
                    unreadCount = 0,
                    memberCount = 6,
                    onlineCount = 3,
                    joinNotice = "Te has unido a la sala de Elena Torres",
                    messages = listOf(
                        ChatMessage(
                            id = "lab_1",
                            sender = "Elena",
                            body = "¡Bienvenidos al Laboratorio de ideas! Compartid aquí vuestras propuestas.",
                            time = "09:38",
                            isOutgoing = false,
                        )
                    ),
                )
            )
        }
        hasPendingInvitation = false
        activeRoomId = labId
        currentScreen = NotasScreen.CONVERSATION
    }

    fun sendMessageToActiveRoom(rawText: String) {
        val text = rawText.trim()
        if (text.isEmpty()) return
        val index = rooms.indexOfFirst { it.id == activeRoomId }
        if (index >= 0) {
            val room = rooms[index]
            val newMsg = ChatMessage(
                id = "msg_${room.messages.size + 1}",
                sender = "Tú",
                body = text,
                time = "09:41",
                isOutgoing = true,
                statusText = "09:41 · Enviado",
            )
            rooms[index] = room.copy(
                unreadCount = 0,
                messages = room.messages + newMsg,
            )
        }
    }

    fun openRoom(roomId: String) {
        val index = rooms.indexOfFirst { it.id == roomId }
        if (index >= 0) {
            rooms[index] = rooms[index].copy(unreadCount = 0)
        }
        activeRoomId = roomId
        currentScreen = NotasScreen.CONVERSATION
    }

    fun setDarkModeAndSync(dark: Boolean) {
        isDarkMode = dark
        if (currentScreen == NotasScreen.PERSONALIZATION && dark) {
            currentScreen = NotasScreen.NIGHT_APPEARANCE
        } else if (currentScreen == NotasScreen.NIGHT_APPEARANCE && !dark) {
            currentScreen = NotasScreen.PERSONALIZATION
        }
    }
}
