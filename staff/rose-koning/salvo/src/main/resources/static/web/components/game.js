const Game = {
    template: `
    <div>
      <h1> Ship Locations!</h1>
      {{gameData.created}}
      <h2>{{currentPlayer}}, you are playing against: {{opponent}}</h2>
  
    <div class="flex-container">
  
    <div class="flex-container__item">
      <h2>Your ships</h2>
      <div class="grid-container" id="ships">
        <template v-for="(cell, key) in cells">
          <template v-if="isShot(cell)">
            <div class="grid-container__cell--shot">{{cell}}</div>
          </template>
          <template v-else-if="isMissedShot(cell)">
            <div class="grid-container__cell--missed-shot">{{cell}}</div>
          </template>
          <template v-else-if="isShip(cell)">
            <div class="grid-container__cell--ship">{{cell}}</div>
          </template>
          <template v-else-if="isShipSelected(cell)">
            <div class="grid-container__cell--active">{{cell}}</div>
          </template>
          <template v-else>
            <div class="grid-container__cell" v-on:click="selectShipCell(cell)">{{cell}}</div>
          </template>
        </template>
      </div>
    </div>
   
  
    <div class="flex-container__item">
      <h2>Your salvoes</h2>
      <div class="grid-container" id="salvoes">
        <template v-for="(cell, key) in cells">
          <template v-if="isSalvo(cell)">
            <div class="grid-container__cell--salvo">{{cell}}</div>
          </template>
          <template v-else-if="isSalvoSelected(cell)">
            <div class="grid-container__cell--active">{{cell}}</div>
          </template>
          <template v-else>
            <div class="grid-container__cell" v-on:click ="selectSalvoCell(cell)">{{cell}}</div>
          </template>
        </template>
      </div>
    </div>
    </div>
  
    <div class="flex-container__ship-buttons" v-if="!shipsPlaced()">
      <h3>Select your ship positions</h3>
      <div :class="maxLength('aircraftcarrier', 5)? 'button__boat--placed' : 'null'">
        <button v-on:click="selectShip('aircraftcarrier',5)" :class="myShips.aircraftcarrier? 'button__boat--active' : 'button__boat'" value="aircraftcarrier"><img src="aircraftcarrier.png" class="boat">Aircraftcarrier(5)</button>
      </div>
      <div :class="maxLength('battleship', 4)? 'button__boat--placed' : 'null'">
        <button v-on:click="selectShip('battleship',4)" :class="myShips.battleship? 'button__boat--active' : 'button__boat'" value="battleship"><img src="battleship.png" class="boat">Battleship(4)</button>
      </div>
      <div :class="maxLength('submarine', 3)? 'button__boat--placed' : 'null'">
        <button v-on:click="selectShip('submarine',3)" :class="myShips.submarine? 'button__boat--active' : 'button__boat'" value="submarine"><img src="submarine.png" class="boat">Submarine(3)</button>
      </div>
      <div :class="maxLength('destroyer', 3)? 'button__boat--placed' : 'null'">
        <button v-on:click="selectShip('destroyer',3)" :class="myShips.destroyer? 'button__boat--active' : 'button__boat'" value="destroyer"><img src="destroyer.png" class="boat">Destroyer(3)</button>
      </div>
      <div :class="maxLength('patrolboat', 2)? 'button__boat--placed' : 'null'">
        <button v-on:click="selectShip('patrolboat',2)" :class="myShips.patrolboat? 'button__boat--active' : 'button__boat'" value="patrolboat"><img src="patrolboat.png" class="boat--patrol">Patrolboat(2)</button>
      </div>
    </div>
  
    <div v-if="error">
    <h3 class="error">{{error}}</h3>
    </div>
    <div v-if="!shipsPlaced()">
      <h3>Do you want to permanently save your ships?</h3>
      <button v-on:click="confirmShips">yes</button>
    </div>
    <div v-if="salvoesPlaced()">
    <h3>Do you want to fire these salvoes?</h3>
    <button v-on:click="confirmSalvoes">yes</button>
  </div>
  
    </div>
  `,
    data() {
      return {
        cells: getCells(),
        gameData: {},
        salvoes: [],
        currentPlayer: {},
        opponent: {},
        isActive: false,
        savedShips: {},
        selectedShipCells: {
          aircraftcarrier: [],
          battleship: [],
          submarine: [],
          destroyer: [],
          patrolboat: []
        },
        selectedSalvoCells: [],
        turnTracker: 1,
        salvoSize: 0,
        myShips: {
          submarine: false,
          aircraftcarrier: false,
          battleship: false,
          destroyer: false,
          patrolboat: false
        },
        myPlacedShips: {
          submarine: false,
          aircraftcarrier: false,
          battleship: false,
          destroyer: false,
          patrolboat: false
        },
        error: "",
        shipSaveButton: false,
        missedShots:{},
        hits:{}
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        var gamePlayerId = this.$route.params.gamePlayerId;
        getGameView(gamePlayerId, game => {
          this.gameData = game;
          this.savedShips = game.ships;
          this.salvoes = game.salvoes;
          this.gamePlayerId = gamePlayerId;
          const { gamePlayers } = game;
          for (var i = 0; i < gamePlayers.length; i++) {
            if (gamePlayers[i].id == this.gamePlayerId) {
              var currentPlayer = gamePlayers[i].player.userName;
            }
            else {
              var opponent = gamePlayers[i].player.userName;
            }
          }
          this.currentPlayer = currentPlayer;
          this.opponent = opponent;
         this.missedShots = game.missedShots;
         this.hits = game.hits;
        })
          .catch(error => {
            this.$router.push({ path: `/login` })
          })
      },
      isSalvo(location) {
        return isSalvoInLocation(this.salvoes, location)
      },
      isShip(location) {
        return isShipInLocation(this.savedShips, location)
      },
      selectShipCell(cell) {
        try {
          if(!this.shipsPlaced)
          this.selectedShipCells = selectCellsForShip(this.selectedShipCells, this.selectedShip, cell)
        } catch (error) {
          this.setError(error.message)
        }
      },
      isShipSelected(cell) {
        return isShipCellSelected(this.selectedShipCells, cell)
      },
      selectShip(ship, length) {
        this.setError(null)
  
        this.selectedShip = { ship, length };
        var keys = Object.keys(this.myShips);
  
        keys.forEach(ship => {
          this.myShips[ship] = false;
        })
  
        this.myShips[ship] = true;
      },
      selectSalvoCell(cell) {
        try {
          this.salvoSize++;
          this.selectedSalvoCells.push(selectCellsForSalvo(this.salvoes, this.salvoSize, cell))
        } catch (error) {
          this.setError(error.message)
        }
      },
      isSalvoSelected(cell) {
        return isSalvoCellSelected(this.selectedSalvoCells, cell);
      },
      setError(error) {
        this.error = error;
      },
      maxLength(ship, size) {
        selectedShip = this.selectedShipCells[ship];
        if (selectedShip.length === size) {
          this.myPlacedShips[ship] = true;
          return true;
        }
      },
      shipsPlaced() {
        var length =Object.keys(this.savedShips).length;
        if(length === 0){
        var keys = Object.keys(this.myPlacedShips);
        var count = 0;
        keys.forEach(ship => {
          if (this.myPlacedShips[ship] != false) {
            count++;
          }
        })
        if (count === 5) {
          return true;
  
        }}
        else
        this.shipSaveButton = true;
        return true;
      },
      salvoesPlaced() {
        if (this.salvoSize === 2)
          return true;
      },
      confirmShips() {
        this.shipSaveButton = true;
        var ships = [];
        var selectedShips = this.selectedShipCells
        var keys = Object.keys(selectedShips)
        for (var i = 0; i < keys.length; i++) {
          ships.push({ "type": keys[i], "location": selectedShips[keys[i]] })
        }
        try {
          setShips(this.$route.params.gamePlayerId, ships, () => {
            this.fetchData();
          })
        } catch {
          this.setError(error);
        }
  
      },
      confirmSalvoes() {
        var salvoes = { "turnTracker": this.turnTracker, "location": this.selectedSalvoCells }
        try {
          setSalvoes(this.$route.params.gamePlayerId, salvoes, () => {
            this.fetchData();
          })
        } catch (error) {
          this.setError(error);
        }
      },
      isShot(cell){
        return isShipShot(cell, this.hits)
      },
      isMissedShot(cell){
       return isCellMissedShot(cell,this.missedShots)
      }
    }
  }
  