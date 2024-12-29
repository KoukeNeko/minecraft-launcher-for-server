// This file is for cmd shell commands to handel the commend line arguments

use std::process::{Command, Stdio};
use tauri::command;

#[command]
pub async fn run_jar() -> Result<String, String> {
    let java_path = "java";
    let jar_path = "/Users/doeshing/Library/CloudStorage/SynologyDrive-MBP20241206/minecraft server/for_testing/arclight-fabric-1.21.1-1.0.0-SNAPSHOT.jar";

    let output = Command::new(java_path)
        .arg("-jar")
        .arg(jar_path)
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .output()
        .map_err(|e| format!("Failed to start process: {}", e))?;

    let stdout = String::from_utf8_lossy(&output.stdout);
    let stderr = String::from_utf8_lossy(&output.stderr);

    if !stderr.is_empty() {
        Err(format!("Error: {}", stderr))
    } else {
        Ok(stdout.to_string())
    }
}
