module.exports.gameLoop = (numberOfSim, changeDoors) => {
    let GamesWon = 0;
    let GamesLost = 0;

    for (let i = 0; i <= numberOfSim; i++) {
        // random Door by User
        let doors = [0, 0, 0];

        const randomDoorIndex = Math.floor(Math.random() * 3)

        // Assuming the User picked random door
        doors[randomDoorIndex] = 1;

        // trying to simulate the user picked doors
        const guess = Math.floor(Math.random() * 3);
        if (changeDoors) {
            doors[guess] ? GamesLost++ : GamesWon++;
        } else {
            doors[guess] ? GamesWon++ : GamesLost++;
        }
    }
    return {
        "GamesWon": GamesWon,
        "GamesLost": GamesLost
    };
}