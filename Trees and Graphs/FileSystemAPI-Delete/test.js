const rmRF = require("./index");

const fsMock = {
  List: jest.fn(),
  Delete: jest.fn(),
  IsDirectory: jest.fn(),
};

describe("rmRF", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("deletes a file", () => {
    fsMock.IsDirectory.mockReturnValue(false);
    rmRF(fsMock, "/path/to/file");
    expect(fsMock.Delete).toHaveBeenCalledTimes(1);
    expect(fsMock.Delete).toHaveBeenCalledWith("/path/to/file");
  });

  it("deletes a directory with files", () => {
    fsMock.IsDirectory.mockReturnValueOnce(true);
    fsMock.List.mockReturnValueOnce(["/path/to/file1", "/path/to/file2"]);
    fsMock.IsDirectory.mockReturnValueOnce(false);
    fsMock.IsDirectory.mockReturnValueOnce(false);

    rmRF(fsMock, "/path/to/directory");
    expect(fsMock.Delete).toHaveBeenCalledTimes(3);
    expect(fsMock.Delete).toHaveBeenNthCalledWith(1, "/path/to/file1");
    expect(fsMock.Delete).toHaveBeenNthCalledWith(2, "/path/to/file2");
    expect(fsMock.Delete).toHaveBeenNthCalledWith(3, "/path/to/directory");
  });

  it("deletes a directory with subdirectories", () => {
    // Mocking the directory structure:
    // /path/to/directory
    //   /subdir1
    //     /file1
    //   /subdir2
    //     /file2
    fsMock.IsDirectory.mockReturnValueOnce(true);
    fsMock.List.mockReturnValueOnce([
      "/path/to/directory/subdir1",
      "/path/to/directory/subdir2",
    ]);

    fsMock.IsDirectory.mockReturnValueOnce(true).mockReturnValueOnce(true);

    fsMock.IsDirectory.mockReturnValueOnce(true).mockReturnValueOnce(false);
    fsMock.List.mockReturnValueOnce(["/path/to/directory/subdir1/file1"]);

    fsMock.IsDirectory.mockReturnValueOnce(true).mockReturnValueOnce(false);
    fsMock.List.mockReturnValueOnce(["/path/to/directory/subdir2/file2"]);

    rmRF(fsMock, "/path/to/directory");

    expect(fsMock.Delete).toHaveBeenCalledTimes(5);
    // Expected deletion order
    const expectedDeletions = [
      "/path/to/directory/subdir1/file1",
      "/path/to/directory/subdir1",
      "/path/to/directory/subdir2/file2",
      "/path/to/directory/subdir2",
      "/path/to/directory",
    ];

    expectedDeletions.forEach((path, index) => {
      expect(fsMock.Delete).toHaveBeenNthCalledWith(index + 1, path);
    });
  });
});
