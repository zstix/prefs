import React from "react";

const Instructions = () => (
  <div className="instructions">
    <h1>Personal Preference!</h1>
    <h2>Rules:</h2>

    <h3>1. Choose a Person</h3>
    <p>Choose a person (take turns!) who everyone will guess for.</p>

    <h3>2. Choose a Category</h3>
    <p>
      The person you are gessing for chooses a category. Click the refresh
      button to see new items. The person who chooses the category will then
      secretly pick their preference between the four items in that category,
      ranking them from <i>most</i> prefered to <i>least</i> prefered.
    </p>

    <h3>3. Guessing Round</h3>
    <p>
      Each other player will write down their guess. Once all players have thier
      guesses in, the other players take turns saying their guesses (and their
      reasons for them). After all other players have gone, the person they are
      guessing for reveals their preferences.
    </p>

    <h3>4. Points &amp; Winning</h3>
    <p>
      1 point per correct answer, no negative points if you're wrong - pick what
      number to play up to and declare a winner
    </p>
  </div>
);

export default Instructions;
