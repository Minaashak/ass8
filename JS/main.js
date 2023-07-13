function quotes(){
    var quote = [
      "“Be yourself; everyone else is already taken.”",
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      "“So many books, so little time.”",
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    ];
    var saying = [
      "― Oscar Wilde",
      "― Albert Einstein",
      "― Frank Zappa",
      "― Bernard M. Baruch",
    ];

    var num = Math.floor( Math.random() * quote.length);

    document.getElementById("quote").innerHTML= quote[num]  + " <br> "+ saying[num];

}
