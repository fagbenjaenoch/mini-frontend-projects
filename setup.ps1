
# Loop through subdirectories, excluding hidden directories and .git
foreach ($subDirectory in Get-ChildItem -Directory | Where-Object { !$_.Hidden -and !$_.Name -eq ".git" }) {

  # Change directory to the subdirectory
  Push-Location $subDirectory.FullName

  # Run pnpm install with non-buffering and capture the output line by line
  pnpm install | Out-Host

  # Check the exit code (after capturing output)
  if ($?) {
    Write-Host "Successfully installed packages in: $($subDirectory.Name)"
  }
  else {
    Write-Host "Failed to install packages in: $($subDirectory.Name)"
  }

  # Pop back to the previous directory
  Pop-Location
}

# Write a message to indicate completion
Write-Host "Finished processing all subdirectories."
