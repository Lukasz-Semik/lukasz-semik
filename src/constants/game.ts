class Health {
  public startingPoints = 100;

  public dropSubstractions = {
    easy: -3,
    hard: -10,
  };

  public obstacleSubstractions = {
    easy: -10,
  };

  public heartAddings = {
    easy: 30,
  };

  public heartAdderVisibilityLevel = this.startingPoints * 0.9;
}

export const gameParameters = {
  health: new Health(),
};
