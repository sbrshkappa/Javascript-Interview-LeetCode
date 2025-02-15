/**
 * You are given a file system with the following API:
 * fs.List(path: string) -> string[]
 * Returns a list of absolute paths of all files and directories inside path.
 *
 * fs.Delete(path: string) -> boolean
 * Deletes the file or directory at path.
 * If path is a directory, it will only be deleted if it is empty.
 * Returns true if deletion is successful, otherwise false.
 *
 * fs.IsDirectory(path: string) -> boolean
 * Returns true if path is a directory, otherwise false.
 *
 * Task:
 * Write a function that recursively deletes a given directory and all its contents, mimicking the behavior of rm -rf.
 * If path is a file, delete it directly.
 * If path is a directory, delete all its nested files and subdirectories before deleting the directory itself.
 *
 * Assumptions:
 * The input path will always be an absolute path.
 * The given path will always exist in the file system.
 */

var rmRF = function (fs, path) {
  if (!fs.IsDirectory(path)) {
    // If it's a file, attempt to delete and return
    fs.Delete(path);
    return;
  }

  // If it's a directory list it's contents
  const items = fs.List(path);
  const directories = [];

  // Delete all files first for optimization
  for (const item of items) {
    if (fs.IsDirectory(`${item}`)) {
      directories.push(`${item}`);
    } else {
      fs.Delete(`${item}`);
    }
  }

  // Recursively delete all nested directories
  for (const dir of directories) {
    rmRF(fs, `${dir}`);
  }

  // Delete the container directory which should now be empty
  fs.Delete(path);
};

module.exports = rmRF;
