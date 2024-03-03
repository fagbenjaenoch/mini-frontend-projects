#!/bin/bash

# Get the current directory
current_dir=$(pwd)

# Loop through subdirectories, excluding hidden directories and .git
for subdir in $(find . -type d  ! -path . -prune -not -name ".git"); do
  # Change directory to the subdirectory
  cd "$subdir"

  # Run pnpm install with non-buffering and capture the output line by line
  pnpm install | tee /dev/tty

  # Check the exit code (after capturing output)
  if [[ $? -eq 0 ]]; then
    echo "Successfully installed packages in: $subdir"
  else
    echo "Failed to install packages in: $subdir"
  fi

  # Go back to the previous directory
  cd "$current_dir"
done

# Print completion message
echo "Finished processing all subdirectories."
