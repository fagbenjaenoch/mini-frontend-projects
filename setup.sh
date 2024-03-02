#!/bin/bash

# Get the current directory
current_dir=$(pwd)

# Loop through subdirectories
for subdir in $(find . -type d  ! -path . -prune); do
  # Change directory to the subdirectory
  cd "$subdir"

  # Run pnpm install and capture the output
  output=$(pnpm install 2>&1)

  # Check if the installation was successful
  if [[ $? -eq 0 ]]; then
    echo "Successfully installed packages in: $subdir"
  else
    echo "Failed to install packages in: $subdir"
    echo "Error message: $output"
  fi

  # Go back to the previous directory
  cd "$current_dir"
done

# Print completion message
echo "Finished processing all subdirectories."
