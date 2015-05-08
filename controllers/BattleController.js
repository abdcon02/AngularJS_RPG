characterList.controller('BattleCtrl', function BattleCtrl($scope, CharacterFactory, MonsterFactory) {
  $scope.MonsterFactory = MonsterFactory;
  $scope.CharacterFactory = CharacterFactory;
  $scope.troll = MonsterFactory.troll;
  $scope.bahamut = MonsterFactory.bahamut;
  $scope.selectedCharacter = CharacterFactory.selectedCharacter;
  $scope.player = CharacterFactory.selectedCharacter;


  $scope.attack = function(monster) {
    monster.health -= 7;
    console.log(monster.health);    
    var roll = Math.floor(Math.random() * 10) + 1;
    if (roll < 5) {
      if ($scope.selectedCharacter == 'warrior'){
        CharacterFactory.warrior[0].health -= 10;
      } else if ($scope.selectedCharacter == 'mage') {
        CharacterFactory.mage[0].health -= 10;
      } else {
        CharacterFactory.rogue[0].health -= 10;
      }
    };
  },

  $scope.attack2 = function(monster) {
    monster.health -= 10;
    var roll = Math.floor(Math.random() * 10) + 1;
    if (roll < 5) {
      if ($scope.selectedCharacter == 'warrior'){
        CharacterFactory.warrior[0].health -= 10;
      } else if ($scope.selectedCharacter == 'mage') {
        CharacterFactory.mage[0].health -= 10;
      } else {
        CharacterFactory.rogue[0].health -= 10;
      }
    };
  },

  $scope.healthpotion = function() {
    if ($scope.selectedCharacter == 'warrior'){
      CharacterFactory.warrior[0].health = 100;
      console.log(CharacterFactory.warrior[0].health);
    } else if ($scope.selectedCharacter == 'mage') {
      CharacterFactory.mage[0].health = 100;
    } else {
      CharacterFactory.rogue[0].health = 100;
    }
  }
});
