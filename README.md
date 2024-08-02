# CLI Bulk Rename Files

This project is a command-line interface (CLI) tool for bulk renaming files. It provides a convenient way to rename multiple files at once, saving you time and effort.

## Features

- Rename multiple files with a single command
- Supports various renaming patterns and rules
- Preview mode to see the changes before applying them
- Undo option to revert the changes if needed

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

To use the CLI Bulk Rename Files tool, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the project directory.
3. Run the command `node index.js` followed by the desired options and arguments.

## Example

    node index.js -d "C:\Developer Projects\test" -p "newFile\_"

    - This lets the file name of the files inside the folder of test to be newFile_ followed by an index number.

4. Review the preview of the file name changes.
5. If satisfied, confirm the changes to apply them.

For detailed usage instructions and available options, refer to the [documentation](docs/usage.md).
