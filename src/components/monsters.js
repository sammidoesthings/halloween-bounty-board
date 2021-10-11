const monsters = [
    {
        name: "Frankenstein",
        type: "undead",
        info: "Frankenstein is afraid of fire, and will lash out erratically if faced with even the smallest flame.",
        bounty: "$300",
        image: "https://images.unsplash.com/photo-1588507648828-ac6ff2e9fb4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Pumpkin-Head",
        type: "demon",
        info: "Hammers are Pumpkin-Head's biggest fear, since the only way to kill a Pumpkin-Head is to crush it's pumpkin-head.",
        bounty: "$1031",
        image: "https://images.unsplash.com/photo-1572526258303-cf6ba72b5e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        name: "Ursula",
        type: "sea witch",
        info: "A sea witch's greatest fear is the air--to be trapped away from the ocean, and forced to walk on human legs.",
        bounty: "$777",
        image: "https://images.unsplash.com/photo-1475007303595-c1bc7ad05904?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8WV92U3hTeFpGTFV8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Golem of Gatlin",
        type: "golem/creation",
        info: "Golems are afraid of the item that breaks down the material they are created from. Gatlin is a mud golem, so can easily be destroyed with a high-pressure water stream.",
        bounty: "$1389",
        image: "https://images.unsplash.com/photo-1619786233987-5e901ed1d27a?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8WV92U3hTeFpGTFV8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Beetlejuice",
        type: "cursed spirit",
        info: "Beetlejuice is a mouthy trickster, and isn't afraid of anything--except, hellworms.",
        bounty: "$1988",
        image: "https://images.unsplash.com/photo-1604225135377-865326b64e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Vechorko",
        type: "harvest devil",
        info: "Harvest devils often fear natural disasters (such as extreme wind, wildfires, or floods) since they believe these events are brought on by angry gods.",
        bounty: "$300",
        image: "https://images.unsplash.com/photo-1572978096517-da57b2aec65b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Voidboi",
        type: "cat demon",
        info: "Cat demons have only one fear--and even that fear is tiny: fleas.",
        bounty: "$6666",
        image: "https://images.unsplash.com/photo-1614770596508-de1d826c3765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80"
    },
    {
        name: "Blood Kraken",
        type: "kraken",
        info: "The Blood Kraken has been terrorizing the seas of Eastern Scotland for decades now. While it has grown to incredible size and strength, its greatest weakness is that it's slow.",
        bounty: "$1688",
        image: "https://images.unsplash.com/photo-1616616839508-635cbd138f73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
]

const topBounties = [
    {
        name: "La Calavera Catrina",
        type: "ghoul",
        info: "Believed to be the original inspiration for Mexican illustrator Jose Posada's 'Dapper Skeleton' artwork and modern day 'Sugar Skull' designs. La Calavera has hinted that her death was at the hands of Posada.",
        bounty: "$505050",
        image: "https://images.unsplash.com/photo-1617296539647-68bd124fdfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80"
    }, 
    // {
    //     name: "Bloody Mary / Snow White",
    //     type: "cursed spirit",
    //     info: "The spirit of gruesome Queen Mary I (1516 - 1558) has been spotted off the coast of Ireland, luring children and the homeless into the woods with ruby red apples.",
    //     bounty: "$1688",
    //     image: "https://images.unsplash.com/photo-1610524689143-88d4c6fa4789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
    // }, 
    // {
    //     name: "Rubeus Hagrid, the Horrible",
    //     type: "wizard",
    //     info: "Formerly the Keeper of Keys and Grounds at Hogwarts School of Wizardry, Hagrid is wanted for multiple counts of torture and murder.",
    //     bounty: "$1688",
    //     image: "https://images.unsplash.com/photo-1616499617101-df12c6bcb250?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80"
    // }
]

export { monsters, topBounties }