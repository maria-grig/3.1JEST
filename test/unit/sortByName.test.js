const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Гарри Поттер",
      "Волшебник изумрудного города",
      
    ]);
  });

  test("Equal books names should not sorted", () => {
    expect(sorting.sortByName(["Гарри Поттер", "Гарри Поттер"])).toEqual([
      "Гарри Поттер",
      "Гарри Поттер",
    ]);
  });
});