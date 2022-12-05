describe("after jest 26", () => {
  beforeEach(() => {
    const mockedDate = new Date(1999, 10, 1);

    jest.useFakeTimers("modern");
    jest.setSystemTime(mockedDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("today is November 1st 1999", () => {
    const today = new Date();
    expect(today.toLocaleDateString("en-US")).toBe("11/1/1999");
  });
});

describe("before jest 26", () => {
  let spy;

  beforeEach(() => {
    const mockedDate = new Date(1996, 6, 19);

    spy = jest.spyOn(global, "Date").mockImplementation(() => mockedDate);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test("today is July 19th 1996", () => {
    const today = new Date();
    expect(today.toLocaleDateString("en-US")).toBe("7/19/1996");
  });
});
