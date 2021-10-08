describe("ban filter", function () {
  it(`removing banned words from string`,
      function () {
          assert.equal("one three four", "one two three four".filter("two"));
          assert.equal("water wind rock", "water sand wind rock".filter("sand"));
      });
});

describe("bubbleSort algorithm", function () {
  it("sorting array or string",
      function () {
          assert.deepEqual([1,6,7,8,11], [6,1,7,11,8].bubbleSort());
          assert.deepEqual([2,7,8,9,10], [9,8,7,10,2].bubbleSort());
      });
});

describe("object inheritance", function () {
  it("Object inheritance test with Mocha",
      function () {
          var instructor = new Teacher();
          instructor.setName("Michael");
          assert.deepEqual("Michael is now teaching WAP", instructor.teach("WAP"));

          var instructor = new Teacher();
          instructor.setName("Sander");
          assert.deepEqual("Sander is now teaching MPP", instructor.teach("MPP"));
      });
});
