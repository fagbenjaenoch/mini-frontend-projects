
# Loop through subdirectories
foreach ($subDirectory in Get-ChildItem -Directory) {

  # Change directory to the subdirectory
  Push-Location $subDirectory.FullName

  # Run pnpm install and capture the output
  $installOutput = pnpm install 2>&1

  # Check if the installation was successful
  if ($?) {
    Write-Host "Successfully installed packages in: $($subDirectory.Name)"
  }
  else {
    Write-Host "Failed to install packages in: $($subDirectory.Name)"
    Write-Host "Error message: $installOutput"
  }

  # Pop back to the previous directory
  Pop-Location
}

# Write a message to indicate completion
Write-Host "Finished processing all subdirectories."
