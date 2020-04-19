class Health {
  public startingPoints = 100;

  public dropSubstractions = {
    easy: -1,
  };

  public obstacleSubstractions = {
    easy: -5,
  };

  public heartAddings = {
    easy: 10,
  };

  public heartAdderVisibilityLevel = this.startingPoints * 0.9;
}

export const gameParameters = {
  health: new Health(),
};
