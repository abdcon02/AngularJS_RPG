characterList.factory('ItemsFactory', function ItemsFactory() {
    var factory = {};
    factory.inventory = ["yo"];

    var potion = {
        life: 50,
    };

    var healthpotion = Object.create(potion);

    factory.inventory.push(healthpotion);

    var index = factory.inventory.indexOf(healthpotion);

    console.log(index);
    console.log(factory.inventory[1]);

    factory.inventory.splice(index,1);
    console.log(factory.inventory);





    return factory;
});
