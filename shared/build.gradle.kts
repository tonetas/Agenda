import com.android.build.api.dsl.KotlinMultiplatformAndroidLibraryExtension
import org.gradle.api.plugins.ExtensionAware
import org.jetbrains.compose.desktop.application.dsl.TargetFormat
import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
}

val hasAndroidSdk = run {
    val localProps = rootProject.file("local.properties")
    val sdkFromProps = if (localProps.exists()) {
        localProps.readLines()
            .firstOrNull { it.startsWith("sdk.dir=") }
            ?.substringAfter("sdk.dir=")
            ?.trim()
            ?.replace("\\\\", "\\")
            ?.replace("\\:", ":")
            ?.takeIf { it.isNotEmpty() }
    } else null
    val sdkPath = sdkFromProps
        ?: System.getenv("ANDROID_HOME")
        ?: System.getenv("ANDROID_SDK_ROOT")
    sdkPath != null && file(sdkPath).exists()
}

if (hasAndroidSdk) {
    apply(plugin = "com.android.kotlin.multiplatform.library")
}

kotlin {
    if (hasAndroidSdk) {
        (this as ExtensionAware).extensions.configure<KotlinMultiplatformAndroidLibraryExtension>("androidLibrary") {
            namespace = "com.notas.agenda"
            compileSdk = 35
            minSdk = 24
        }
    }

    jvm("desktop")

    js {
        browser {
            commonWebpackConfig {
                outputFileName = "notasAgend.js"
            }
        }
        binaries.executable()
    }

    @OptIn(ExperimentalWasmDsl::class)
    wasmJs {
        browser {
            commonWebpackConfig {
                outputFileName = "notasAgendWasm.js"
            }
        }
        binaries.executable()
    }

    sourceSets {
        commonMain.dependencies {
            implementation(libs.compose.runtime)
            implementation(libs.compose.foundation)
            implementation(libs.compose.material3)
            implementation(libs.compose.ui)
            implementation(libs.compose.components.resources)
            implementation(libs.compose.ui.tooling.preview)
        }

        getByName("desktopMain").dependencies {
            implementation(compose.desktop.currentOs)
        }

        if (hasAndroidSdk) {
            getByName("androidMain").dependencies {
                implementation(libs.androidx.activity.compose)
            }
        }
    }
}

compose.desktop {
    application {
        mainClass = "com.notas.agenda.MainKt"

        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "NotasAgend"
            packageVersion = "1.0.0"
        }
    }
}
