describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(mineLocation([ [1, 0], [0, 0] ]), [0, 0]);
  Test.assertSimilar(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]), [0, 0]);
  Test.assertSimilar(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]), [2, 2]);
    });
  });


function mineLocation(field){
    for (let i = 0; i < field.lenght;i++)
      {
        for (let j = 0; j < field[i].lenght;j++)
          {
            if(field[i][j] == 1)
              {
                return [i,j];
              }
          }
      }
 }