new Vue({
    el: '#app',
    data: {
        playerTypes: {
            playerType: "player",
            monsterType: "monster"
        },
        initialHealth: 100,
        isGameRunning: false,
        playerHealth: 0,
        monsterHealth: 0,
        attackMultiplier: 10,
        healMultiplier: 12,
        disableHeal: true,
        battleLogs: []
    },
    methods: {
        startNewGame: function () {
            this.battleLogs = [];
            this.isGameRunning = true;
            this.playerHealth = this.initialHealth;
            this.monsterHealth = this.initialHealth;
        },
        attack: function () {
            this.disableHeal = false;
            this.monsterAttack();
            let playerAttackValue = this.calaculateActionValue(this.attackMultiplier);
            this.monsterHealth -= playerAttackValue
            this.logAction(this.playerTypes.playerType, playerAttackValue, 'attack');
            this.checkForGameResult();

        },
        heal: function () {
            let healValue = this.calaculateActionValue(this.healMultiplier);

            if (this.playerHealth + healValue > 100) {
                healValue = this.initialHealth - this.playerHealth;
                //this.playerHealth = 100;
            } else if (this.disableHeal) {
                this.disableHeal = false;
            }

            this.playerHealth += healValue;
            this.logAction(this.playerTypes.playerType, healValue, 'heal');
            this.monsterAttack();

            if (this.playerHealth >= 100)
                this.disableHeal = true;

            this.checkForGameResult();
        },
        specialAttack() {
            let attackValue = this.calaculateActionValue(this.attackMultiplier * 2);
            this.monsterHealth -= attackValue;
            this.logAction(this.playerTypes.playerType, attackValue, 'special attack');
            this.checkForGameResult();

        },
        monsterAttack: function () {
            let monsterAttackValue = this.calaculateActionValue(this.attackMultiplier);
            this.playerHealth -= monsterAttackValue;
            this.logAction(this.playerTypes.monsterType, monsterAttackValue, 'attack');
            this.checkForGameResult();
        },
        checkForGameResult() {
            if (this.playerHealth <= 0) {
                this.raiseAlert("You died!");
            } else if (this.monsterHealth <= 0) {
                this.raiseAlert("you won!");
            } else if (this.monsterHealth == 0 && this.playerHealth == 0) {
                this.raiseAlert("It is draw!");
            }
        },
        raiseAlert(msg) {
            if (confirm(`${msg} Do you want to start a new game ?`)) {
                this.startNewGame();
            } else {
                this.isGameRunning = false;
            }
        },
        logAction: function (attacker, amount, action) {
            let cssClassName = '';
            if (attacker == this.playerTypes.playerType) {
                cssClassName = 'player-turn';
            }
            else {
                cssClassName = 'monster-turn';
            }
            this.battleLogs.unshift({ attacker: attacker, amount: amount, cssClassName: cssClassName, action: action });
        },
        calaculateActionValue(multiplier) {
            return Math.round(Math.random() * multiplier);
        }
    }
})