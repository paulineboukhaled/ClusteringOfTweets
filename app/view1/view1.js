'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {

        $scope.article = "It’s going to take everyone awhile to recover from the May 31 episode of Game of Thrones. Daenerys (Emilia Clarke) and Tyrion (Peter Dinklage) discussed their future together, Cersei (Lena Headey) found herself without a plan for the first time in forever, Theon (Alfie Allen) revealed a shocking secret to Sansa (Sophie Turner) and a massive army of White Walkers and Jon Snow (Kit Harington) came face-to-face in the show’s most terrifying battle scene to date. Daenerys hadn’t killed Tyrion and Jorah, so that was a relief. They stood before her and Missandei. Dany wanted to know if Tyrion really was who he said he was. She was still adamant about revenge against the Lannisters, and Tyrion thought he was just the guy who could help her out. He’d killed his mother on the day he was born, and he’d just killed his father. “Clearly I’m the best Lannister killer around,” he joked. ";
        ;
        $scope.tweets = [
            {
                "date": "May 11, 2015 12:16:35 AM",
                "text": "It\u0027s May \u0026 its still \u0026 there\u0027s still snow fall in Denver fxck dat shxt",
                "id": 597525669086515200,
                "similarity": 0.06790702918529451
            },
            {
                "date": "May 11, 2015 12:25:25 AM",
                "text": "what will we do w/o jon stewart at the helm of the daily show?",
                "id": 597527892088770560,
                "similarity": 0.1447957677300368
            },
            {
                "date": "May 11, 2015 12:31:17 AM",
                "text": "@imabookeater @LourTaylor Tyrion te amo \u003c3",
                "id": 597529368483733505,
                "similarity": 0.14713132030110393
            },
            {
                "date": "May 11, 2015 12:32:44 AM",
                "text": "Sunday report: slept til 1, still in PJs, watching #PacificRim, crockpot tacos are cooking, Game of Thrones and #OUAT finale tonight! 🙌🏼",
                "id": 597529733375492096,
                "similarity": 0.06581982390316468
            },
            {
                "date": "May 11, 2015 12:32:47 AM",
                "text": "Weather    snow, tornados ,and a tropical storm in one day",
                "id": 597529745971159041,
                "similarity": 0.09648663613530027
            },
            {
                "date": "May 11, 2015 12:33:02 AM",
                "text": "@sitdowncomedian @katy_red @RitziWrites I called Theon Greyjoy Alfie Allen until very recently. Jon Snow is the only one I always remembered",
                "id": 597529808881483777,
                "similarity": 0.11469641323247402
            },
            {
                "date": "May 11, 2015 12:33:07 AM",
                "text": "Awesome Cover of Game of Thrones (Main Theme/Opening Song)! https://t.co/r4simmiWq9 By the Venezuelan guitarist #SrodAlmenara",
                "id": 597529829853044736,
                "similarity": 0.05680533132240353
            },
            {
                "date": "May 11, 2015 12:33:16 AM",
                "text": "Well that was not what I was expecting! #GameofThrones Get GOT today http://t.co/2T3KVPEF3U http://t.co/on4a3RWzpV",
                "id": 597529867601715201,
                "similarity": 0.17469159741272025
            },
            {
                "date": "May 11, 2015 12:34:33 AM",
                "text": "@badassbrittsnow Thankgod I\u0027m not the only one calling myself brittany snow",
                "id": 597530190550532096,
                "similarity": 0.06218113275077878
            },
            {
                "date": "May 11, 2015 12:40:58 AM",
                "text": "R.I.P Jon and Manny❤️🙏 http://t.co/QZQSd69at6",
                "id": 597531805357514755,
                "similarity": 0.14203502711761865
            },
            {
                "date": "May 11, 2015 12:49:40 AM",
                "text": "Should be finishing up Life After Death and starting on my Jon Bon Jovi biography! Hooray for down time at work.",
                "id": 597533994813501440,
                "similarity": 0.07304344441779932
            },
            {
                "date": "May 11, 2015 1:16:59 AM",
                "text": "Richard Avedon. Greatest portrait photographer in my opinion. Known for his stark white background a http://t.co/va1bIObF3i",
                "id": 597540869277908992,
                "similarity": 0.05324213930532531
            },
            {
                "date": "May 11, 2015 1:21:45 AM",
                "text": "\"HE WAS PROBABLY WEARING GREY UNDERWEAR.\"",
                "id": 597542068840435712,
                "similarity": 0.14827856972918574
            },
            {
                "date": "May 11, 2015 1:23:09 AM",
                "text": "That\u0027s what GameOfThrones needs, some ninja shit, some Islanders far off and away from Westeros. Not a sizable force but legendary \u0026 mystic",
                "id": 597542421145133056,
                "similarity": 0.05640547938331236
            },
            {
                "date": "May 11, 2015 1:23:54 AM",
                "text": "The cop is the alligator from Princess and the Frog and I\u0027m sure I hear Grey Grffin. #HarveyBeaks",
                "id": 597542609888759808,
                "similarity": 0.21551690656816402
            },
            {
                "date": "May 11, 2015 1:27:27 AM",
                "text": "\"I\u0027m Plus 8, like Jon and Kate.\" - Lil Dicky",
                "id": 597543503292403712,
                "similarity": 0.08100287811431738
            },
            {
                "date": "May 11, 2015 1:29:29 AM",
                "text": "In letters of gold on a snow white kite\nI will write \"I love you\"\nAnd send it soaring high above you\nFor all to read",
                "id": 597544014993326080,
                "similarity": 0.07115103730840318
            },
            {
                "date": "May 11, 2015 1:31:52 AM",
                "text": "The sad thing is you can\u0027t even see my face properly... She\u0027s Snow White http://t.co/Ma0hUfI3ww",
                "id": 597544614770384897,
                "similarity": 0.13354779038196848
            },
            {
                "date": "May 11, 2015 1:32:10 AM",
                "text": "I got Daenerys Targaryen! Which \"Game Of Thrones\" Character Matches Your Zodiac Sign? http://t.co/prqrFNYVec @_luciasr",
                "id": 597544690271948800,
                "similarity": 0.051906408389642736
            },
            {
                "date": "May 11, 2015 1:38:35 AM",
                "text": "Brienne didn\u0027t kill a bear with a wooden sword, but I heard she beat the hell out of a giant hound with her fists #FairyTaleGossip",
                "id": 597546305095798784,
                "similarity": 0.08376397355140007
            },
            {
                "date": "May 11, 2015 1:42:43 AM",
                "text": "Game of Thrones Season 5 Episode 5 Online Kill the boy Live Streaming here http://t.co/TzTBrmC433 #GameofThrones #GameOfThronesSeason5",
                "id": 597547345287327745,
                "similarity": 0.08330251368160863
            },
            {
                "date": "May 11, 2015 1:57:14 AM",
                "text": "Wild night for the Rockies: heavy spring snow and tornadoes http://t.co/xFDIK6RjFV #startup #Dubai #GCC",
                "id": 597550998513651712,
                "similarity": 0.11073557601958083
            },
            {
                "date": "May 11, 2015 2:03:55 AM",
                "text": "You are all 4 seasons rolled into one, you\u0027re like the cold December snow in the warm July sun.",
                "id": 597552680416858112,
                "similarity": 0.08107794743174582
            },
            {
                "date": "May 11, 2015 2:05:18 AM",
                "text": "I actually love the grey suit Bruno wore in that vid",
                "id": 597553028544139264,
                "similarity": 0.06522731846113969
            },
            {
                "date": "May 11, 2015 2:11:53 AM",
                "text": "i got my mom the fifty shades of grey movie and seeing her reaction melted my heart😇❤️❤️",
                "id": 597554685294153728,
                "similarity": 0.13448247802402621
            },
            {
                "date": "May 11, 2015 2:14:19 AM",
                "text": "Happy Mother\u0027s Day .... Thanks for the grey hairs guys 💐💐😘😘 http://t.co/Wk9b8VHlgM",
                "id": 597555297666871296,
                "similarity": 0.109766328767292
            },
            {
                "date": "May 11, 2015 2:19:31 AM",
                "text": "\"You know nothing Jon Snow.\"",
                "id": 597556606298169344,
                "similarity": 0.06476264644422713
            },
            {
                "date": "May 11, 2015 2:26:58 AM",
                "text": "#Game of #Thrones #Season 5 #Episode 5\u003e\u003e\u003e\u003e\u003e\u003e\u003esF\u003c\u003c\u003c\u003c\u003c_http://t.co/TDPVJvgeaf",
                "id": 597558481143484416,
                "similarity": 0.06615496719539198
            },
            {
                "date": "May 11, 2015 2:32:25 AM",
                "text": "you were there for me to love and care for me when skies were grey whenever I was down",
                "id": 597559852676747265,
                "similarity": 0.1285003342003159
            },
            {
                "date": "May 11, 2015 2:37:27 AM",
                "text": "Guess who got her copy of 50 Shades of Grey! 󾬘󾌰󾌧󾬘 http://t.co/GYWkWu4X8r",
                "id": 597561119348232192,
                "similarity": 0.09961760045850145
            },
            {
                "date": "May 11, 2015 2:40:53 AM",
                "text": "Loving the dress! Snow Black! #OnceUponATimeSeasonFinale #OnceUponATime",
                "id": 597561983374860290,
                "similarity": 0.07658350090318025
            },
            {
                "date": "May 11, 2015 2:42:27 AM",
                "text": "Ummm okay Snow White is super hot as the evil queen. 😍",
                "id": 597562377652019200,
                "similarity": 0.07809528829372801
            },
            {
                "date": "May 11, 2015 2:42:41 AM",
                "text": "YES! RT @CeCeTyshay: Snow better work as the evil queen. #OUAT",
                "id": 597562436376469505,
                "similarity": 0.06559962082595135
            },
            {
                "date": "May 11, 2015 2:44:07 AM",
                "text": "SNOWS REGINA AND REGINAS SNOW AND RUMPLE IS A KNIGHT AND EMMA DOESNT EXISIST??? MI OS CONUFSD",
                "id": 597562797069889536,
                "similarity": 0.14395897743199262
            },
            {
                "date": "May 11, 2015 2:44:10 AM",
                "text": "loving this holiday! \u0026 love seeing all the pics of moms on social media. now time for game of thrones! #GoT",
                "id": 597562809652801536,
                "similarity": 0.07568416540275318
            },
            {
                "date": "May 11, 2015 2:45:01 AM",
                "text": "When asked to describe the plot of Game of Thrones in 5 words; \"everyone fights for king... Dragons\"",
                "id": 597563023570640896,
                "similarity": 0.0893881945309868
            },
            {
                "date": "May 11, 2015 2:47:38 AM",
                "text": "@tweetsbytrode well you see when the atmosphere becomes warmer and turns into spring then spring starts to turn into summer the snow melts..",
                "id": 597563682097336320,
                "similarity": 0.1054488266723349
            },
            {
                "date": "May 11, 2015 2:48:09 AM",
                "text": "You know nothing jon snow",
                "id": 597563812099792897,
                "similarity": 0.06476264644422713
            },
            {
                "date": "May 11, 2015 2:48:13 AM",
                "text": "ok this is confusing bc when regina was a young adult, snow was a little kid so how the fuck is it possible for regina to be a little kid-",
                "id": 597563828868665344,
                "similarity": 0.14175448659263618
            },
            {
                "date": "May 11, 2015 2:50:03 AM",
                "text": "The New Balance 999WSB \u0027Elite Mecha\u0027 sneakers in Grey / Yellow / Black are now available! They… https://t.co/6Y7LYHANx4",
                "id": 597564290258837504,
                "similarity": 0.05252612136411288
            },
            {
                "date": "May 11, 2015 2:56:37 AM",
                "text": "Snow and Neymar. Hair inspiration #OnceUponATime http://t.co/86ckRAIHDK",
                "id": 597565942831435776,
                "similarity": 0.08784226746095326
            },
            {
                "date": "May 11, 2015 2:59:06 AM",
                "text": "Man fuck this game...Game of Thrones time",
                "id": 597566567761719296,
                "similarity": 0.05740571004046591
            },
            {
                "date": "May 11, 2015 2:59:16 AM",
                "text": "I just want Sansa and Daenerys to show their boobs. Please.. #HBO #GameofThrones",
                "id": 597566609696235520,
                "similarity": 0.1906869770859914
            },
            {
                "date": "May 11, 2015 3:00:13 AM",
                "text": "Clearly they need to kill a boy tonight since they killed Ser Grandfather last episode. #GameofThrones #KillTheBoy",
                "id": 597566848796864512,
                "similarity": 0.1092952425426177
            },
            {
                "date": "May 11, 2015 3:00:15 AM",
                "text": "Game of Thrones!",
                "id": 597566857189707776,
                "similarity": 0.059740380945369764
            },
            {
                "date": "May 11, 2015 3:00:48 AM",
                "text": "#GameofThrones and #PennyDreadful tonight.",
                "id": 597566995593322496,
                "similarity": 0.10315408586783796
            },
            {
                "date": "May 11, 2015 3:01:05 AM",
                "text": "Game of Thrones means steak and wine.  #quietintherealm https://t.co/HAsaeCThH5",
                "id": 597567066871214080,
                "similarity": 0.099931784488215
            },
            {
                "date": "May 11, 2015 3:02:39 AM",
                "text": "Game of Thrones is coming on. I really hope no white people get killed because that would be #WhiteGenocide.   A #Honkeycaust even.",
                "id": 597567461135790080,
                "similarity": 0.10477196459338742
            },
            {
                "date": "May 11, 2015 3:02:42 AM",
                "text": "Game of Thrones time! 🙌🏼",
                "id": 597567473743958016,
                "similarity": 0.0847903145650596
            },
            {
                "date": "May 11, 2015 3:02:56 AM",
                "text": "Game of Thrones is on!!! The highlight to my week #GameofThrones #GoT",
                "id": 597567532459888640,
                "similarity": 0.08789841255164356
            },
            {
                "date": "May 11, 2015 3:03:06 AM",
                "text": "@gentlevaletudo *Arya managed to cuddle up to him as she was still shocked from it* Well... That is a damn shame... He was so friendly.",
                "id": 597567574390476800,
                "similarity": 0.17857600555331354
            },
            {
                "date": "May 11, 2015 3:03:37 AM",
                "text": "Quiet in the realm. It\u0027s #GameOfThrones time",
                "id": 597567704405520384,
                "similarity": 0.11255684313168199
            },
            {
                "date": "May 11, 2015 3:03:38 AM",
                "text": "I love the game of thrones series",
                "id": 597567708620791809,
                "similarity": 0.12277245183494293
            },
            {
                "date": "May 11, 2015 3:05:17 AM",
                "text": "time for Game of Thrones or \"D\u0026D\u0027s sexist, watered down reimagining of GRRM\u0027s A Song of Ice and Fire\" as it should be called",
                "id": 597568123861147650,
                "similarity": 0.08376242073751002
            },
            {
                "date": "May 11, 2015 3:07:40 AM",
                "text": "She is gonna feed them to the dragons!!!  #GameofThrones",
                "id": 597568723646599168,
                "similarity": 0.08933152088518635
            },
            {
                "date": "May 11, 2015 3:08:07 AM",
                "text": "@DragonflyJonez Tyrion\u0027s savvy political mind is what she needs to evolve",
                "id": 597568836892655616,
                "similarity": 0.08428274376994388
            },
            {
                "date": "May 11, 2015 3:09:02 AM",
                "text": "Game of Thrones AND @CuseMLAX!",
                "id": 597569067571097600,
                "similarity": 0.22676266385906374
            },
            {
                "date": "May 11, 2015 3:09:10 AM",
                "text": "It\u0027s Thrones time!",
                "id": 597569101133979648,
                "similarity": 0.09330705694203666
            },
            {
                "date": "May 11, 2015 3:09:24 AM",
                "text": "DANY JUST WENT FULL AERYS!!!!!!!!!!!! #NOONEUNDERSTAAANDS #GAMEOFTHRONES http://t.co/tCD3AWGfFd",
                "id": 597569159833063425,
                "similarity": 0.06519600110362259
            },
            {
                "date": "May 11, 2015 3:10:09 AM",
                "text": "They really do an amazing job on the dragons.#GameofThrones",
                "id": 597569348568522753,
                "similarity": 0.11195379794462643
            },
            {
                "date": "May 11, 2015 3:11:25 AM",
                "text": "Man, I need my own dragon. Dany is mad af. I guess dragons don\u0027t have to wait for their food to cool off before eating. #GameofThrones",
                "id": 597569667364970498,
                "similarity": 0.05268512711161963
            },
            {
                "date": "May 11, 2015 3:13:14 AM",
                "text": "Is the tree in the Horde Garrison herb garden meant to look like the white tree from (particularly this season\u0027s opening) Game of Thrones?:o",
                "id": 597570124535693312,
                "similarity": 0.1292874810695107
            },
            {
                "date": "May 11, 2015 3:13:18 AM",
                "text": "Oh. So the title of this episode didn\u0027t literally mean to kill the boy. That\u0027s a let down.  #GameofThrones",
                "id": 597570141291876352,
                "similarity": 0.10982196526965157
            },
            {
                "date": "May 11, 2015 3:13:20 AM",
                "text": "jon\u0027s face lmao \"i have to leave the house??? to get your allegiance??? oh come on can\u0027t i torrent this\"",
                "id": 597570149688877057,
                "similarity": 0.0877119794519366
            },
            {
                "date": "May 11, 2015 3:13:29 AM",
                "text": "@ogZeb Game of Thrones",
                "id": 597570187450187778,
                "similarity": 0.059740380945369764
            },
            {
                "date": "May 11, 2015 3:13:43 AM",
                "text": "SNOW WHITE KILLED A DWARF! #OnceUponATimeSeasonFinale",
                "id": 597570246162153473,
                "similarity": 0.1516007358227143
            },
            {
                "date": "May 11, 2015 3:14:51 AM",
                "text": "A good mother never gives up on her children... #true #gameofthrones #MotherOfDragons",
                "id": 597570531370598400,
                "similarity": 0.06363485935937176
            },
            {
                "date": "May 11, 2015 3:15:29 AM",
                "text": "Jon Snow the Gawd",
                "id": 597570690783551489,
                "similarity": 0.1313967799296549
            },
            {
                "date": "May 11, 2015 3:15:46 AM",
                "text": "Jon Snow is gonna wake up with a knife in his back one of these days.",
                "id": 597570762061447168,
                "similarity": 0.05295578405033001
            },
            {
                "date": "May 11, 2015 3:15:50 AM",
                "text": "Why are people screaming outside my window? They should be inside, watching Game of Thrones, and screaming. #getyourshittogether #GoT",
                "id": 597570778863947777,
                "similarity": 0.07068996172322296
            },
            {
                "date": "May 11, 2015 3:16:38 AM",
                "text": "\"There\u0027s nothing between us but Soave and opportunity\" - Jon Snow #DemThrones #PFGoT",
                "id": 597570980169588737,
                "similarity": 0.07651063666641753
            },
            {
                "date": "May 11, 2015 3:16:51 AM",
                "text": "\"Kill the boy, Jon Snow -- Winter is almost upon us. Kill the boy and let the man be born...\" #GameofThrones #KillTheBoy",
                "id": 597571034695368705,
                "similarity": 0.18214220656671515
            },
            {
                "date": "May 11, 2015 3:17:07 AM",
                "text": "Can we all just agree that #GameofThrones is just one big allegory about life in Joe Biden’s America?",
                "id": 597571101808578560,
                "similarity": 0.07078276361622174
            },
            {
                "date": "May 11, 2015 3:17:26 AM",
                "text": "Jon Snow and Daenerys are supposed to be around the same age. Look at how much more capable Jon is, at leading. #RIPNed #DemThrones #GOTNOC",
                "id": 597571181508562944,
                "similarity": 0.13568970079924622
            },
            {
                "date": "May 11, 2015 3:17:31 AM",
                "text": "Heavy is the head, Jon Snow... #GameofThrones",
                "id": 597571202459144192,
                "similarity": 0.10459140392134852
            },
            {
                "date": "May 11, 2015 3:18:09 AM",
                "text": "I lost my heart the moment Snow said Emma with that momma tone and she was faking it dis bitch",
                "id": 597571361851252736,
                "similarity": 0.19493746984018848
            },
            {
                "date": "May 11, 2015 3:18:14 AM",
                "text": "We can learn to live with the wildlings, or we can add them to the army of the dead. #GameofThrones http://t.co/HWy1RhyeRw",
                "id": 597571382810189826,
                "similarity": 0.14089119106379264
            },
            {
                "date": "May 11, 2015 3:19:12 AM",
                "text": "This episode of #GameofThrones is a special Mother\u0027s Day episode. The Mother of Dragons loves her children. #letthedragonsdecide",
                "id": 597571626113335297,
                "similarity": 0.14665493402060878
            },
            {
                "date": "May 11, 2015 3:20:37 AM",
                "text": "Is every single Jon quote from the trailers taken from this one episode? I think so. #GameofThrones #KillTheBoy",
                "id": 597571982608179201,
                "similarity": 0.08340311763789134
            },
            {
                "date": "May 11, 2015 3:21:28 AM",
                "text": "From /u/ancolie: \"I am sure Olly will accept this rational explanation and bear no grudge towards Jon whatsoever.\" #GoTCommentary",
                "id": 597572196526006272,
                "similarity": 0.06110356014019907
            },
            {
                "date": "May 11, 2015 3:21:53 AM",
                "text": "Check out Jon Pardi Sets Release Date for His ‘B-Sides’ http://t.co/T2fSa8Zxip @tasteofcountry - One of these songs opens his shows.",
                "id": 597572301362597888,
                "similarity": 0.09930719817911471
            },
            {
                "date": "May 11, 2015 3:23:24 AM",
                "text": "Checkout the snow Globe at mom\u0027s house.... https://t.co/SmuCmEUNHE",
                "id": 597572683040174080,
                "similarity": 0.07506017060939928
            },
            {
                "date": "May 11, 2015 3:23:27 AM",
                "text": "Man. they call Theon \"it.\"",
                "id": 597572695648243712,
                "similarity": 0.07567037739362577
            },
            {
                "date": "May 11, 2015 3:23:50 AM",
                "text": "When is winter going to get here?  It\u0027s been 5 seasons and \"Winter is still pending\" #losinginterest  #GameofThrones",
                "id": 597572792096264193,
                "similarity": 0.09303576256029429
            },
            {
                "date": "May 11, 2015 3:24:19 AM",
                "text": "David and Jon brought my mom flowers 😱❤️",
                "id": 597572913726763009,
                "similarity": 0.08579793417774688
            },
            {
                "date": "May 11, 2015 3:24:44 AM",
                "text": "@LunaLanieee the game of thrones intro came on but it\u0027s not the same without you dancing around. 😢",
                "id": 597573018597007360,
                "similarity": 0.18973085248094848
            },
            {
                "date": "May 11, 2015 3:24:46 AM",
                "text": "Boy Myranda you have picked the WRONG person to pull the jealous girlfriend thing on. #GameOfThrones #KillTheBoy",
                "id": 597573027006648321,
                "similarity": 0.07743322577675141
            },
            {
                "date": "May 11, 2015 3:26:41 AM",
                "text": "Ok that was some freaky deaky....yeah #GameofThrones",
                "id": 597573509326327808,
                "similarity": 0.11114953893587229
            },
            {
                "date": "May 11, 2015 3:27:58 AM",
                "text": "And Sansa is dumb enough to trust this wench. #GoT #GameofThrones",
                "id": 597573832292044800,
                "similarity": 0.08095331430738499
            },
            {
                "date": "May 11, 2015 3:29:35 AM",
                "text": "THeon... :( #GameofThrones",
                "id": 597574239164596224,
                "similarity": 0.054771104518086824
            },
            {
                "date": "May 11, 2015 3:29:35 AM",
                "text": "Click here to watch the video: http://t.co/2BfEGeKPdm Sasha Grey… http://t.co/WydZSPNt02 http://t.co/sWpA9MQqZ6",
                "id": 597574239164608512,
                "similarity": 0.06278583016668093
            },
            {
                "date": "May 11, 2015 3:30:01 AM",
                "text": "Ramsay is the creepiest dude on the planet. RIP Sansa.",
                "id": 597574348191371264,
                "similarity": 0.12297378663582706
            },
            {
                "date": "May 11, 2015 3:30:36 AM",
                "text": "Stannis Baratheon correcting a brother of the Night\u0027s Watch for using \"less\" instead of \"fewer\" and I\u0027m now hopelessly #teamStannis.",
                "id": 597574494979514368,
                "similarity": 0.09026607158363165
            },
            {
                "date": "May 11, 2015 3:31:51 AM",
                "text": "I love jamie and dakota but... When im reading my mrs. Grey and ana looks like... #50ShadesOfGrey http://t.co/V7eRoVmTEu",
                "id": 597574809568968704,
                "similarity": 0.09796742981927471
            },
            {
                "date": "May 11, 2015 3:31:54 AM",
                "text": "We\u0027re spending way too much time with the Boltons. #GameofThrones",
                "id": 597574822156234752,
                "similarity": 0.06425682401318566
            },
            {
                "date": "May 11, 2015 3:32:08 AM",
                "text": "I can\u0027t wait for the day I get to watch the Boltons burn and suffer,my God I hate them. #GameofThrones",
                "id": 597574880863887361,
                "similarity": 0.15084485851055981
            },
            {
                "date": "May 11, 2015 3:32:37 AM",
                "text": "Ramsay really does seem to like cutting bits off people so that was surprising to say the least #GameofThrones",
                "id": 597575002519695362,
                "similarity": 0.12763270913453761
            },
            {
                "date": "May 11, 2015 3:35:31 AM",
                "text": "Still so fucking pissed they gave this storyline to Sansa just redeem Theon",
                "id": 597575732311826432,
                "similarity": 0.09230110832444058
            },
            {
                "date": "May 11, 2015 3:40:25 AM",
                "text": "daenerys and tyrion will always be my favs",
                "id": 597576965445517312,
                "similarity": 0.2191392706945418
            },
            {
                "date": "May 11, 2015 3:40:35 AM",
                "text": "cheesecake and Grey\u0027s :)",
                "id": 597577007405268993,
                "similarity": 0.12150949319672875
            },
            {
                "date": "May 11, 2015 3:40:44 AM",
                "text": "@RawRadioTalk @caitsings and on the 7th day jon said \" LET THERE BE WANG\" and there was wang. And it was good.",
                "id": 597577045120577536,
                "similarity": 0.30633067025435734
            },
            {
                "date": "May 11, 2015 3:40:51 AM",
                "text": "If he hadn\u0027t joined the Mens Watch, he would\u0027ve still been running that used record store. #GameofThrones",
                "id": 597577074510028800,
                "similarity": 0.08757740893041308
            },
            {
                "date": "May 11, 2015 3:42:33 AM",
                "text": "HOLD ON SOMEONE JUST SAID WHEN JON SNOW RETURNS",
                "id": 597577502333210626,
                "similarity": 0.08251492933616307
            },
            {
                "date": "May 11, 2015 3:43:02 AM",
                "text": "Snow coming through the window and he like, winter might be coming soon #PFGOT #DemThrones",
                "id": 597577623938662400,
                "similarity": 0.09964047315886491
            },
            {
                "date": "May 11, 2015 3:43:19 AM",
                "text": "Why the hell is #onceuponatime going all #gameofthrones on us???",
                "id": 597577695258611712,
                "similarity": 0.08563666325233878
            },
            {
                "date": "May 11, 2015 3:43:23 AM",
                "text": "Starting Missoula, by Jon Krakauer: OK, I guess I\u0027m doing this to myself. See y\u0027all on the... http://t.co/YKNyNOLzUb",
                "id": 597577712019107840,
                "similarity": 0.052906467263092026
            },
            {
                "date": "May 11, 2015 3:43:29 AM",
                "text": "So they send Jon off on a boat and then they\u0027re like \"peace out, we left you a 6 pack in the fridge, be back soon.\" #GoT #GameofThrones",
                "id": 597577737180749824,
                "similarity": 0.11637799645076038
            },
            {
                "date": "May 11, 2015 3:44:20 AM",
                "text": "Not sure if it\u0027s calculated or just pure coincidence but I appreciate the \"On a very special Mother\u0027s Day Game of Thrones\" themed episodes.",
                "id": 597577951102816257,
                "similarity": 0.10690086244696363
            },
            {
                "date": "May 11, 2015 3:44:31 AM",
                "text": "Ser Davos is rocking amazing arched brows AND a perfect beard. 💯 #GameOfBrows #GameofThrones",
                "id": 597577997244305410,
                "similarity": 0.05171627402162813
            },
            {
                "date": "May 11, 2015 3:44:38 AM",
                "text": "Today you could have picked your season in Nebraska.Winter in the west 2ft of snow to summer in the east w/storms (fall \u0026 spring in between)",
                "id": 597578026591899648,
                "similarity": 0.09183791251612278
            },
            {
                "date": "May 11, 2015 3:44:45 AM",
                "text": "sam and stannis I CAN\u0027T BREATHE",
                "id": 597578055964430337,
                "similarity": 0.085597549357537
            },
            {
                "date": "May 11, 2015 3:45:30 AM",
                "text": "Be gone, you crazy red witch! Get your freak on elsewhere, and leave my precious Jon Snow alone. #DemThrones #GOTNOC",
                "id": 597578244687200256,
                "similarity": 0.057093795837925364
            },
            {
                "date": "May 11, 2015 3:48:43 AM",
                "text": "OMG! Gray Worm knows like ten words in English and he\u0027s still getting all the hoes man.",
                "id": 597579054187970561,
                "similarity": 0.12983877680767042
            },
            {
                "date": "May 11, 2015 3:49:28 AM",
                "text": "Missandei and Grey Worm. These two are adorable. They are the model GoT relationship #DemThrones #GameofThrones",
                "id": 597579242935865345,
                "similarity": 0.119510643108142
            },
            {
                "date": "May 11, 2015 3:50:14 AM",
                "text": "50 shades of grey album and bath time\u003d amazing 🙆🏼",
                "id": 597579435890614274,
                "similarity": 0.09404116255298563
            },
            {
                "date": "May 11, 2015 3:50:55 AM",
                "text": "Dude just hit this chick with the ultimate game on game of thrones ✊🏽😂",
                "id": 597579607856943106,
                "similarity": 0.10779734680222507
            },
            {
                "date": "May 11, 2015 3:50:59 AM",
                "text": "I liked a @YouTube video http://t.co/OzZm14J0x7 Jon Bellion - The Making Of Luxury (Behind The Scenes)",
                "id": 597579624617537537,
                "similarity": 0.10454088058368488
            },
            {
                "date": "May 11, 2015 3:50:59 AM",
                "text": "Mormont going to get Tyrion killed. Ffs m",
                "id": 597579624621723648,
                "similarity": 0.19055226095756547
            },
            {
                "date": "May 11, 2015 3:51:27 AM",
                "text": "Game of Thrones: 1-4 (DVD) SEASONS 1,2,3 BRAND NEW AND SEALED FAST SHIPPING! - Full read b… http://t.co/362r46VKVB http://t.co/AGaW1ndzu6",
                "id": 597579742087356417,
                "similarity": 0.06873015613279171
            },
            {
                "date": "May 11, 2015 3:51:43 AM",
                "text": "Grey Worm and Missandei!! 🙌🏼🙌🏼",
                "id": 597579809183629312,
                "similarity": 0.15897905392330536
            },
            {
                "date": "May 11, 2015 3:53:19 AM",
                "text": "OH NO JORAH. #GameofThrones",
                "id": 597580211824132096,
                "similarity": 0.050843754410026726
            },
            {
                "date": "May 11, 2015 3:55:14 AM",
                "text": "THE STONE MEN #GameOfThrones #DemThrones",
                "id": 597580694185979905,
                "similarity": 0.08116174162283904
            },
            {
                "date": "May 11, 2015 3:55:18 AM",
                "text": "Drogon is just chillin...he must have himself a boo somewhere. #DemThrones #GameofThrones",
                "id": 597580710963056640,
                "similarity": 0.06320543644799738
            },
            {
                "date": "May 11, 2015 3:56:27 AM",
                "text": "Was water really the best decision there? #GameofThrones",
                "id": 597581000345001984,
                "similarity": 0.20832774757721867
            },
            {
                "date": "May 11, 2015 3:56:37 AM",
                "text": "tyrion got pulled down under like those dolphins that bring you into their sex caves look it up it\u0027s real i swear #thronesbanter",
                "id": 597581042317402113,
                "similarity": 0.07610937952735207
            },
            {
                "date": "May 11, 2015 3:57:03 AM",
                "text": "Sweet bejesus the damn stone men we keep hearing about. #DemThrones #GameofThrones @GameOfThrones",
                "id": 597581151369199616,
                "similarity": 0.0628991547417548
            },
            {
                "date": "May 11, 2015 3:57:05 AM",
                "text": "Forget the zombie apocalypse...watch out stonemen. #GameofThrones",
                "id": 597581159749390336,
                "similarity": 0.07728724771280462
            },
            {
                "date": "May 11, 2015 3:58:11 AM",
                "text": "Don\u0027t touch Tyrion again bitch.",
                "id": 597581436556816384,
                "similarity": 0.08283871743528733
            },
            {
                "date": "May 11, 2015 3:58:47 AM",
                "text": "OH NO JORAH #GameofThrones",
                "id": 597581587564363776,
                "similarity": 0.050843754410026726
            },
            {
                "date": "May 11, 2015 3:59:56 AM",
                "text": "If I\u0027m hungry while watching #DemThrones, I crave pigeon soup and their other disgusting meals. #GoT #GameofThrones",
                "id": 597581876971331585,
                "similarity": 0.0643341412233273
            },
            {
                "date": "May 11, 2015 4:00:00 AM",
                "text": "acalmem o cu, tyrion não vai morrer não",
                "id": 597581893769506817,
                "similarity": 0.06277087103054975
            },
            {
                "date": "May 11, 2015 4:00:02 AM",
                "text": "Tyrion\u0027s rescue from the stone men! Just like the books!  Except. Where is my bae Jon Connington #gameofthrones #nobodyunderstaaaands",
                "id": 597581902145392641,
                "similarity": 0.176052923098974
            },
            {
                "date": "May 11, 2015 4:00:28 AM",
                "text": "I\u0027ve just watched episode S05E05 of Game of Thrones! http://t.co/bvMSpI09mH #GOT #tvshowtime http://t.co/xfP5k7HMN3",
                "id": 597582011172298752,
                "similarity": 0.07813389504593023
            },
            {
                "date": "May 11, 2015 4:00:28 AM",
                "text": "Pensei que o Tyrion fosse morrer mesmo hauah #gameofthrones",
                "id": 597582011201671168,
                "similarity": 0.06550864885082118
            },
            {
                "date": "May 11, 2015 4:00:46 AM",
                "text": "A LANNISTER AND A MARTELL",
                "id": 597582086678056960,
                "similarity": 0.14431319740065374
            },
            {
                "date": "May 11, 2015 4:00:58 AM",
                "text": "Game of Thrones is just mashing characters\u0027 story lines together and it\u0027s so lame.",
                "id": 597582137018187776,
                "similarity": 0.14086510749129005
            },
            {
                "date": "May 11, 2015 4:01:04 AM",
                "text": "Now Sansa\u0027s found Theon. She\u0027s not happy. #GameofThrones",
                "id": 597582162175631360,
                "similarity": 0.09899232211895499
            },
            {
                "date": "May 11, 2015 4:01:06 AM",
                "text": "Tyrion is still cute even tho he\u0027s a dwarf. #GameOfThrones",
                "id": 597582170568396800,
                "similarity": 0.13683708217872778
            },
            {
                "date": "May 11, 2015 4:03:04 AM",
                "text": "@brucetannica Im NOT a #GameofThrones BOOK guy so I only go by what is on tv. His position on TV has never been as a \"face\" but I like him",
                "id": 597582665508872192,
                "similarity": 0.08937393082349224
            },
            {
                "date": "May 11, 2015 4:03:35 AM",
                "text": "And once again nyu wifi screws me as I try to watch Game of Thrones.....",
                "id": 597582795519696896,
                "similarity": 0.07414176433479526
            },
            {
                "date": "May 11, 2015 4:03:43 AM",
                "text": "O TYRION VENDO O DROGON GNT A LAGRIMA CAIU AQUI #GOTBR #GoTSeason5",
                "id": 597582829090951168,
                "similarity": 0.056932541245658004
            },
            {
                "date": "May 11, 2015 4:03:48 AM",
                "text": "Tyrion rlz 💛💛💛💛",
                "id": 597582850033082368,
                "similarity": 0.13093406078208109
            },
            {
                "date": "May 11, 2015 4:04:10 AM",
                "text": "I feel like my top three favorite characters at this point are: Jon Snow (obvs), Tyrion, and Brienne. Honorable mention for Sam. #GoT",
                "id": 597582942307618817,
                "similarity": 0.1074428952035346
            },
            {
                "date": "May 11, 2015 4:05:45 AM",
                "text": "Eu achando que ia acabar na hora que o Tyrion tava afundando: 😱 #GoTSeason5 #GOT #GameofThrones http://t.co/VnvTtRFqyu",
                "id": 597583340800204800,
                "similarity": 0.05368403470350049
            },
            {
                "date": "May 11, 2015 4:06:00 AM",
                "text": "Atribuí nota 9 ao episódio 5x5 - Kill the Boy de Game of Thrones http://t.co/lhsnuZ5jrG #bancodeseries",
                "id": 597583403693645824,
                "similarity": 0.07559123130165006
            },
            {
                "date": "May 11, 2015 4:06:01 AM",
                "text": "Tyrion looked like they are sailing into Jurassic Park. लोल! #गेमॉफ्थ्रोन्स",
                "id": 597583407887978497,
                "similarity": 0.07816631158608775
            },
            {
                "date": "May 11, 2015 4:06:04 AM",
                "text": "Game Of Thrones tonight was soooo good!",
                "id": 597583420483592192,
                "similarity": 0.13936456526582883
            },
            {
                "date": "May 11, 2015 4:06:28 AM",
                "text": "As long as Tyrion is alive and well in #GoT, I don\u0027t care about anything else.\rAlso, I literally hate Daenerys.",
                "id": 597583521125834752,
                "similarity": 0.1429547069749468
            },
            {
                "date": "May 11, 2015 4:06:45 AM",
                "text": "Maybe @asvpxrocky is foreshadowing that he\u0027s gonna be in the next 50 shades of grey ???",
                "id": 597583592441704448,
                "similarity": 0.11639858249537136
            },
            {
                "date": "May 11, 2015 4:06:47 AM",
                "text": "Dear #Drogo, It\u0027s #MothersDay . Don\u0027t forget to fly home and visit your mother. #MotherOfDragons #GameofThrones",
                "id": 597583600813408256,
                "similarity": 0.08101247110203563
            },
            {
                "date": "May 11, 2015 4:09:52 AM",
                "text": "Sansa\u0027s ironic smile to Ramsay was fantastic, haha! #GameOfThrones",
                "id": 597584376772296704,
                "similarity": 0.10324945360271646
            },
            {
                "date": "May 11, 2015 4:10:06 AM",
                "text": "Game of Thrones was pretty damn great. Also, three hints about a certain fate for a certain character in two episodes. I am so happy rn",
                "id": 597584435509334016,
                "similarity": 0.08610396140978843
            },
            {
                "date": "May 11, 2015 4:10:08 AM",
                "text": "@debibravo game of thrones 😎",
                "id": 597584443897962496,
                "similarity": 0.059740380945369764
            },
            {
                "date": "May 11, 2015 4:11:54 AM",
                "text": "#GameofThrones #curforjorah #FriendZone and #ebola #staystrongJORAH",
                "id": 597584888494166016,
                "similarity": 0.08245907774180644
            },
            {
                "date": "May 11, 2015 4:12:44 AM",
                "text": "Just got home and it\u0027s game of thrones time.",
                "id": 597585098200977409,
                "similarity": 0.1955166036543786
            },
            {
                "date": "May 11, 2015 4:12:46 AM",
                "text": "2 snow bunnies call em marry kste and Ashley",
                "id": 597585106568650752,
                "similarity": 0.07485365709430175
            },
            {
                "date": "May 11, 2015 4:13:05 AM",
                "text": "I want snow crabs and shrimp",
                "id": 597585186285424640,
                "similarity": 0.09872384402764116
            },
            {
                "date": "May 11, 2015 4:14:22 AM",
                "text": "Fifty Shades of Grey was so good to me. I ain\u0027t know white boys fuck like dat lol",
                "id": 597585509238505472,
                "similarity": 0.10095113604726598
            },
            {
                "date": "May 11, 2015 4:15:10 AM",
                "text": "For a short second I thought the kennel master\u0027s daughter had Lady in the Kennel! #GameofThrones #twistedCannon.",
                "id": 597585710569263104,
                "similarity": 0.102057650158181
            },
            {
                "date": "May 11, 2015 4:16:20 AM",
                "text": "I managed to avoid Game of Thrones spoilers for the past three weeks until just now. Thanks internet, this is why we can\u0027t have nice things",
                "id": 597586004170579969,
                "similarity": 0.07413122591524324
            },
            {
                "date": "May 11, 2015 4:16:35 AM",
                "text": "Going to start watching Game of Thrones at the crib, it\u0027s long overdue.",
                "id": 597586067101908992,
                "similarity": 0.10748752980744218
            },
            {
                "date": "May 11, 2015 4:18:57 AM",
                "text": "I\u0027m at stater bros and the beautiful man w grey hair is here",
                "id": 597586662655283201,
                "similarity": 0.11916377257444885
            },
            {
                "date": "May 11, 2015 4:20:14 AM",
                "text": "Hey @NiallOfficial ,\nYou make my grey skies blue again \nAnd speaking of blue ...\nmake that the color of my follow button?\n🐧💙👣🐧💙👣🐧💙👣🐧💙👣\n3,254",
                "id": 597586985641967616,
                "similarity": 0.08900521166404049
            },
            {
                "date": "May 11, 2015 4:20:38 AM",
                "text": "Bom episódio ... Achei que tinha acabado qdo tyrion caiu na água . #GameofThrones",
                "id": 597587086313652224,
                "similarity": 0.05395330505357619
            },
            {
                "date": "May 11, 2015 4:21:01 AM",
                "text": "@NKB121 Look at the Chiasson chart I just posted and compare the two coaching regimes for a stark example.",
                "id": 597587182761734145,
                "similarity": 0.15669665813175962
            },
            {
                "date": "May 11, 2015 4:27:23 AM",
                "text": "@BenRogers kind of like a professional broadcaster who still refusing to report the facts Jon Daniels.. SHOTS FIRED, if u see me beer me",
                "id": 597588784985735168,
                "similarity": 0.08673460199702779
            },
            {
                "date": "May 11, 2015 4:29:19 AM",
                "text": "Daaaaaaamn Daenerys!!!! #GameofThrones",
                "id": 597589271520874496,
                "similarity": 0.0744006067051242
            },
            {
                "date": "May 11, 2015 4:29:48 AM",
                "text": "The show that\u0027s on after games of Thrones is pretty funny I don\u0027t know what its called though lol",
                "id": 597589393176666112,
                "similarity": 0.09328991488338849
            },
            {
                "date": "May 11, 2015 4:31:24 AM",
                "text": "one day ill make it through all of 50 shades of grey, but today was not that day",
                "id": 597589795800395777,
                "similarity": 0.11228012400856947
            },
            {
                "date": "May 11, 2015 4:37:24 AM",
                "text": "Want to read the fifty shades of Grey books 😁",
                "id": 597591305775022080,
                "similarity": 0.06837198460117082
            },
            {
                "date": "May 11, 2015 4:39:23 AM",
                "text": "I desperately want a sitcom of The Boltons. Like The Waltons, but much more macabre.  #GameofThrones #ramsaysnow",
                "id": 597591804872138752,
                "similarity": 0.08231880383474789
            },
            {
                "date": "May 11, 2015 4:39:49 AM",
                "text": "Stand on the hood, the other person drives as fast as possible and then slams on the breaks and you go flying in a snow bank #canadiangames",
                "id": 597591913953234946,
                "similarity": 0.17985394575584146
            },
            {
                "date": "May 11, 2015 4:40:09 AM",
                "text": "SickRage: Download Finished: Game of Thrones - 5x05 - Kill the Boy - HD TV",
                "id": 597591997818544128,
                "similarity": 0.08007308697396222
            },
            {
                "date": "May 11, 2015 4:40:39 AM",
                "text": "@lanalover13once they actually could. Like charming gave his heart and then suddenly snow gives him half her heart and he\u0027s back",
                "id": 597592123660062720,
                "similarity": 0.1895395563726187
            },
            {
                "date": "May 11, 2015 4:43:13 AM",
                "text": "Toronto’s Jeremy Podeswa did a fine, fine job directing tonight’s Game of Thrones episode. Tense and gripping — great season so far.",
                "id": 597592769583030273,
                "similarity": 0.06007508428317706
            },
            {
                "date": "May 11, 2015 4:45:20 AM",
                "text": "Game of Thrones  😍💞",
                "id": 597593302268047360,
                "similarity": 0.059740380945369764
            },
            {
                "date": "May 11, 2015 4:45:45 AM",
                "text": "@traplordcee i don\u0027t either , i was just thinking about snow 💀",
                "id": 597593407100321792,
                "similarity": 0.1714099684041479
            },
            {
                "date": "May 11, 2015 4:48:39 AM",
                "text": "Paint And Make It Happen! Morning Snow - (2-3) http://t.co/rfbP2R5GKG",
                "id": 597594136913518592,
                "similarity": 0.08840607580008454
            },
            {
                "date": "May 11, 2015 4:49:35 AM",
                "text": "Whip That White You Can Snow Me",
                "id": 597594371807117313,
                "similarity": 0.05748977605232564
            },
            {
                "date": "May 11, 2015 4:50:02 AM",
                "text": "There\u0027s a lot of sex on Game of Thrones. Seems unrealistic though. Was doggie-style even invented by the Middle Ages?",
                "id": 597594485070036992,
                "similarity": 0.10904638610339638
            },
            {
                "date": "May 11, 2015 4:54:09 AM",
                "text": "Ascolta su http://t.co/170OrEM4sC la musica di THE AVENER AND KADEBOSTANY - CASTLE IN THE SNOW Scarica l\u0027APP e portaci sempre con te!",
                "id": 597595521050681344,
                "similarity": 0.12634171992568238
            },
            {
                "date": "May 11, 2015 4:56:35 AM",
                "text": "USA TODAY: \u0027Game of Thrones\u0027 recap: \u0027Kill the boy\u0027 http://t.co/LRLmmR1ALG - http://t.co/qXX9dZs6gK #NewsInTweets http://t.co/mRgB1SpTpx",
                "id": 597596133414678528,
                "similarity": 0.07539873328672086
            },
            {
                "date": "May 11, 2015 5:03:12 AM",
                "text": "@lpdutchboy \nI think amid the chaos of Stannis battle on Winterfell, Stansa might have a chance to run away with the help of Bren.",
                "id": 597597798540808192,
                "similarity": 0.11009700312543334
            },
            {
                "date": "May 11, 2015 5:04:33 AM",
                "text": "My wardrobe consist of exactly 4 colors. Black, grey, white and Carolina Panthers blue. #sundayobservations",
                "id": 597598138279567360,
                "similarity": 0.06697087184804615
            },
            {
                "date": "May 12, 2015 12:41:50 AM",
                "text": "I forgot how weird the musical episode of Grey\u0027s Anatomy was",
                "id": 597894411343646720,
                "similarity": 0.15656586194094438
            },
            {
                "date": "May 12, 2015 12:42:16 AM",
                "text": "Tbh Dany, this Eyes Wide Shut sequel is great. Could do with more orgies and less Dany though. #GameofThrones",
                "id": 597894520399917057,
                "similarity": 0.08680216211570789
            },
            {
                "date": "May 12, 2015 12:42:51 AM",
                "text": "Game Of Thrones S5.05 \"Kill The Boy\": We’re half way through season 5 and yet it still feels ... http://t.co/wanQcesbr3 #gamer #ps #xbox",
                "id": 597894667200438272,
                "similarity": 0.10879042794830933
            },
            {
                "date": "May 12, 2015 12:43:44 AM",
                "text": "Laying in bed starting to read of mice and men thats due in a day and eating marshmallow fluff while listening to grey\u0027s \n\nthis is my life",
                "id": 597894889473515520,
                "similarity": 0.09149825101226537
            },
            {
                "date": "May 12, 2015 12:45:49 AM",
                "text": "Hey @NiallOfficial ,\nYou make my grey skies blue again \nAnd speaking of blue ...\nmake that the color of my follow button?\n🐧💙👣🐧💙👣🐧💙👣🐧💙👣\n3,329",
                "id": 597895413761445889,
                "similarity": 0.08900521166404049
            },
            {
                "date": "May 12, 2015 12:47:22 AM",
                "text": "@chris_white20 @Erickthesixfive yall tape teams practices an plays. Yall deflate balls an yall clear out snow for a person to kick the ball",
                "id": 597895803852693504,
                "similarity": 0.05378315954194717
            },
            {
                "date": "May 12, 2015 12:52:43 AM",
                "text": "Well this is new Emma is teaching snow and charming about hope",
                "id": 597897150224322560,
                "similarity": 0.09060937046811027
            },
            {
                "date": "May 12, 2015 12:53:09 AM",
                "text": "the used // the bird and the worm",
                "id": 597897259288645632,
                "similarity": 0.25569208052132697
            },
            {
                "date": "May 12, 2015 12:53:28 AM",
                "text": "3 episodes into Game of Thrones and I know for a fact if the king and his wife were alive today they\u0027d be Tories",
                "id": 597897338980573184,
                "similarity": 0.20869806639390207
            },
            {
                "date": "May 12, 2015 12:57:22 AM",
                "text": "I may or may not be rocking out to Snow - Informer.",
                "id": 597898320430796800,
                "similarity": 0.07563080771632975
            },
            {
                "date": "May 12, 2015 12:57:38 AM",
                "text": "#nw #GameofThrones s05e05 - Kill The Boy",
                "id": 597898387556585472,
                "similarity": 0.08273671957956431
            },
            {
                "date": "May 12, 2015 1:02:36 AM",
                "text": "@ThatMumboJumbo Rallying aka the most intense thing ever. going 70mph to 100mph off road/on road on snow/dirt/gravel/tarmac",
                "id": 597899637442371584,
                "similarity": 0.06418872162574736
            },
            {
                "date": "May 12, 2015 1:10:08 AM",
                "text": "Jon Stewart Buys A Farm… What He’s Turning It Into? I LOVE This!\nhttp://t.co/XzV7lNBk4o http://t.co/Klxd5eu8v0",
                "id": 597901533280215040,
                "similarity": 0.05219819189105917
            },
            {
                "date": "May 12, 2015 1:14:31 AM",
                "text": "A number of #weather alerts and warnings are current for #Tasmania. Seen any #snow yet? http://t.co/HWCsH8cEEp",
                "id": 597902636373913600,
                "similarity": 0.06722718623932865
            },
            {
                "date": "May 12, 2015 1:15:22 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue descar... http://t.co/2y40NAdkHg",
                "id": 597902850270703616,
                "similarity": 0.061252286067614015
            },
            {
                "date": "May 12, 2015 1:18:18 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue descar... http://t.co/Shgcb8h6Om",
                "id": 597903588489236480,
                "similarity": 0.061252286067614015
            },
            {
                "date": "May 12, 2015 1:21:35 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue descar... http://t.co/2wHRFlm9Xy",
                "id": 597904414767120385,
                "similarity": 0.061252286067614015
            },
            {
                "date": "May 12, 2015 1:22:41 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue descar... http://t.co/D2RA8HONed",
                "id": 597904691565989888,
                "similarity": 0.061252286067614015
            },
            {
                "date": "May 12, 2015 1:23:37 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado  Kill the Boy, el más reciente episodio de la serie, fue descargado … http://t.co/GqQRIbBGVn",
                "id": 597904926455537665,
                "similarity": 0.059855704877079856
            },
            {
                "date": "May 12, 2015 1:26:34 AM",
                "text": "Apron  Misses Grey and Pink Chevron by SewCraftyMargo http://t.co/BLSYyMjYhf via @Etsy",
                "id": 597905668847177728,
                "similarity": 0.06080573842185352
            },
            {
                "date": "May 12, 2015 1:28:59 AM",
                "text": "\"Give me the room overlooking Winterfell so I can brood and stare off into the distance.\" #GameofThrones",
                "id": 597906277008863232,
                "similarity": 0.1309595996666122
            },
            {
                "date": "May 12, 2015 1:35:36 AM",
                "text": "Sheriff Jon Stivers gave his report: Sheriff Jon Stivers gave his report. They are getting the bugs worked out... http://t.co/ooOnQqeOxZ",
                "id": 597907942147432448,
                "similarity": 0.09952135259138012
            },
            {
                "date": "May 12, 2015 1:35:41 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue descar... http://t.co/2yQus1xU1P",
                "id": 597907963135660032,
                "similarity": 0.061252286067614015
            },
            {
                "date": "May 12, 2015 1:35:49 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue descar... http://t.co/mPPkKSiZFv",
                "id": 597907996702740481,
                "similarity": 0.061252286067614015
            },
            {
                "date": "May 12, 2015 1:43:11 AM",
                "text": "I\u0027ve just watched episode S05E03 of Game of Thrones! (I\u0027m now at 1 month 10 days 2 hours) http://t.co/eAFZxGpMvb",
                "id": 597909850589388801,
                "similarity": 0.06551842068256922
            },
            {
                "date": "May 12, 2015 1:43:48 AM",
                "text": "Only miss the sun when it\u0027s starts to snow. Only know you love her when you ley her go.",
                "id": 597910005745098752,
                "similarity": 0.11306527512037445
            },
            {
                "date": "May 12, 2015 1:47:20 AM",
                "text": "Marquei como visto Game of Thrones - 5x1 - The Wars to Come http://t.co/OV4MxeJB62 #bancodeseries",
                "id": 597910894945828864,
                "similarity": 0.06852924052426869
            },
            {
                "date": "May 12, 2015 1:47:24 AM",
                "text": "“Snow? What do you plan to do? I need to know.” — Hope to Snow",
                "id": 597910911752413185,
                "similarity": 0.0726924559625624
            },
            {
                "date": "May 12, 2015 1:48:44 AM",
                "text": "Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue descar... http://t.co/qGfBNZjqyb",
                "id": 597911247296704512,
                "similarity": 0.061252286067614015
            },
            {
                "date": "May 12, 2015 1:51:54 AM",
                "text": "@seadogsradio Jon Lester at 2.57 between 2005 and 2007",
                "id": 597912044181049344,
                "similarity": 0.12138027514618596
            },
            {
                "date": "May 12, 2015 1:52:01 AM",
                "text": "Urbanears HUMLAN The Wash and Wear Headphone - Grey http://t.co/xkXDnisC1K",
                "id": 597912073545322496,
                "similarity": 0.11637914661983277
            },
            {
                "date": "May 12, 2015 1:57:02 AM",
                "text": "“@beautifulbrwnnn: just saw 50 shades of grey, \u0026 it was not good. 😒” 😭😭😭😭😩😩😩 whatttttttttttttttttt",
                "id": 597913336035041280,
                "similarity": 0.14666484979357428
            },
            {
                "date": "May 12, 2015 1:58:10 AM",
                "text": "#GameOfThrones Funko Mini Mystery Game Of Thrones Figure Edition 2 -The Hound… http://t.co/5eajuSE7r3 #TV #Series http://t.co/tbDyi0ZPPo",
                "id": 597913621260148736,
                "similarity": 0.05822075945033915
            },
            {
                "date": "May 12, 2015 1:59:51 AM",
                "text": "Elviis Capítulo de Game of Thrones, el más pirateado:  Kill the Boy, el más reciente episodio de la serie, fue... http://t.co/sBvsBuQm8y",
                "id": 597914044885008384,
                "similarity": 0.059855704877079856
            },
            {
                "date": "May 12, 2015 2:00:07 AM",
                "text": "Game of Thrones: S5.E5 \"Kill the Boy\" Post-Episode Discussion https://t.co/ZEpcmp5CzG",
                "id": 597914112002301952,
                "similarity": 0.10632179371302604
            },
            {
                "date": "May 12, 2015 2:00:15 AM",
                "text": "Can\u0027t get enough Game of Thrones? Explore Westeros with this fan-created Google Maps version of the fictional... http://t.co/JL4RTYSz1y",
                "id": 597914145560915968,
                "similarity": 0.051525647326145445
            },
            {
                "date": "May 12, 2015 2:18:08 AM",
                "text": "The video is here: http://t.co/in1i196Wpn\nSasha Grey coordination... http://t.co/U6Di5CXoQ0",
                "id": 597918646019559424,
                "similarity": 0.07830895092987572
            },
            {
                "date": "May 12, 2015 2:27:49 AM",
                "text": "Assisti a \"Game of Thrones: Kill The Boy\" s5ep5 http://t.co/1u8gqZ62Nn #orangotag",
                "id": 597921082918612992,
                "similarity": 0.0788682256174839
            },
            {
                "date": "May 12, 2015 2:32:06 AM",
                "text": "ok I missed the last two eps about GoT and they killed Barristan??? and Grey urm??? are you fucking kidding me what rhe fcuk",
                "id": 597922160863121409,
                "similarity": 0.1813584178658342
            },
            {
                "date": "May 12, 2015 2:32:20 AM",
                "text": "Gonna watch 50 shades of grey for the first time.  I may get scared and turn it off #RedRoomOfPain",
                "id": 597922219562512384,
                "similarity": 0.16428649160125322
            },
            {
                "date": "May 12, 2015 2:49:32 AM",
                "text": "A little epiphany today...: So, the last series I really read was game of thrones. I hated that he didn\u0027t hesi... http://t.co/KzaDC0JnJr",
                "id": 597926548092506112,
                "similarity": 0.14565238489444512
            },
            {
                "date": "May 12, 2015 2:51:32 AM",
                "text": "Skylar Grey has the ability to spread her darkness.",
                "id": 597927051434164225,
                "similarity": 0.09452109116338651
            },
            {
                "date": "May 12, 2015 2:54:58 AM",
                "text": "The #Mets have zero hits through three innings against Jon Lester. In fact, they have only one hard-hit ball, courtesy John Mayberry.",
                "id": 597927915448336384,
                "similarity": 0.0638991200504625
            },
            {
                "date": "May 12, 2015 3:04:47 AM",
                "text": "I wish the radio would stop only playing maroon 5 and that stupid 50 shades of grey song 😒",
                "id": 597930385884876800,
                "similarity": 0.10305595969651908
            },
            {
                "date": "May 12, 2015 3:10:25 AM",
                "text": "Jay Z Bought Beyonce A Super Rare (And Cool) ‘Game Of Thrones’ Gift: Emilia Clarke says Jay Z got Beyoncé this... http://t.co/WdTgc4s33s",
                "id": 597931803555418114,
                "similarity": 0.09377474823678514
            },
            {
                "date": "May 12, 2015 3:14:43 AM",
                "text": "@kt_adrienne *A coat fair as snow and... my eyes? KIN?!*",
                "id": 597932885711003648,
                "similarity": 0.08299246073800637
            },
            {
                "date": "May 12, 2015 3:16:08 AM",
                "text": "Dear #GamerGate People, as much as I love you all, learn what Venn Diagrams, nuance, shades of grey and perspectives are. It will help you",
                "id": 597933242222686209,
                "similarity": 0.05887064447855915
            },
            {
                "date": "May 12, 2015 3:30:16 AM",
                "text": "\u0027Game of Thrones\u0027 recap: Power comes with costs for Jon Snow and Daenerys http://t.co/2dIJTD2jz9",
                "id": 597936798967287809,
                "similarity": 0.14747740830028236
            },
            {
                "date": "May 12, 2015 3:39:59 AM",
                "text": "Oh god The Lair of the White Worm is on",
                "id": 597939244263481344,
                "similarity": 0.1552075490404836
            },
            {
                "date": "May 12, 2015 3:41:25 AM",
                "text": "#Australia: Wild weather set to hit #Victoria, with blizzards, snow and hail forecast @ABCNews\nhttp://t.co/4M1SeLeAjJ http://t.co/VrkVArU5Vn",
                "id": 597939604977618944,
                "similarity": 0.05772676240309355
            },
            {
                "date": "May 12, 2015 4:03:06 AM",
                "text": "The Daily Show with Jon Stewart Season 20 ... http://t.co/hvUs9s6Xo0",
                "id": 597945061762945026,
                "similarity": 0.10752210814163518
            },
            {
                "date": "May 12, 2015 4:03:15 AM",
                "text": "#GoT inspirational poster - \"Kill the boy and let the man be born.\" #GameofThrones you done me so good.",
                "id": 597945099499089922,
                "similarity": 0.16256451616069573
            },
            {
                "date": "May 12, 2015 4:08:02 AM",
                "text": "@mschoendorff nope. it\u0027s an escape tone, per Jon Anderson: \"first you step in it, then you leap away from it.\" clearly an echappe.",
                "id": 597946303268683777,
                "similarity": 0.0768312901914817
            },
            {
                "date": "May 12, 2015 4:13:49 AM",
                "text": "New blog post #gameofthrones - \"Kill the boy....and let the man be born\" http://t.co/oc4g5EdIAK",
                "id": 597947758713012224,
                "similarity": 0.18315089509968538
            },
            {
                "date": "May 12, 2015 4:16:15 AM",
                "text": "THE DEVERS, JON AND NATHAN ARE ALL TOGETHER WATCHING THE EPISODE - I AM TRASH",
                "id": 597948371060396032,
                "similarity": 0.2000720493714321
            },
            {
                "date": "May 12, 2015 4:16:36 AM",
                "text": "Jay Z Apparently Bought One of the ‘Game of Thrones’ Dragon Eggs for Beyonce http://t.co/doBYq0vXHB",
                "id": 597948459132456962,
                "similarity": 0.08285487067535115
            },
            {
                "date": "May 12, 2015 4:22:38 AM",
                "text": "Just started watching Grey\u0027s Anatomy. I can already tell that my emotions are going to be all over the place.",
                "id": 597949977478860801,
                "similarity": 0.09165168902517766
            },
            {
                "date": "May 12, 2015 4:29:06 AM",
                "text": "@XOSeattleSlim They are! Also...This book makes me hate Cat Stark and Visery MORE",
                "id": 597951604889878528,
                "similarity": 0.06808592253592989
            },
            {
                "date": "May 12, 2015 4:34:11 AM",
                "text": "Too bad we can\u0027t feed our criminals to the dragon like on game of thrones",
                "id": 597952884114763777,
                "similarity": 0.06551679511899218
            },
            {
                "date": "May 12, 2015 4:35:42 AM",
                "text": "I liked a @YouTube video http://t.co/JsgybUZSfD Game of Thrones VS Lord of the Rings",
                "id": 597953265804976128,
                "similarity": 0.0912459844020728
            },
            {
                "date": "May 12, 2015 4:45:01 AM",
                "text": "watching the OUAT finale, squealing at Snow\u0027s hair #OnceUponATimeSeasonFinale @OnceABC",
                "id": 597955610445938688,
                "similarity": 0.07131108954778255
            },
            {
                "date": "May 12, 2015 4:45:08 AM",
                "text": "@J_Allison11 I DIDN\u0027T KNOW IT WAS YOUR BIRTHDAY😅 happy birthday Jon 🎉❤️ hope it was good",
                "id": 597955639797796865,
                "similarity": 0.16035674337556377
            },
            {
                "date": "May 12, 2015 4:45:16 AM",
                "text": "Lex and I might have a slight obsession with grey\u0027s anatomy😂🙈",
                "id": 597955673347993600,
                "similarity": 0.06269046312057207
            },
            {
                "date": "May 12, 2015 4:57:57 AM",
                "text": "Gostei de um vídeo @YouTube http://t.co/bl2EMAaEOm of Thrones VS Lord of the Rings",
                "id": 597958865209171968,
                "similarity": 0.08119614050411461
            },
            {
                "date": "May 12, 2015 4:58:53 AM",
                "text": "“Long sullen silences and an occasional punch in the face: The Mormont way.” #GameofThrones",
                "id": 597959100081655808,
                "similarity": 0.18028034134650048
            },
            {
                "date": "May 12, 2015 5:10:39 AM",
                "text": "Ima hooligan for the money .. I\u0027m eatin but I got a tape worm in my tummy!!!",
                "id": 597962061256134657,
                "similarity": 0.056887728964842246
            },
            {
                "date": "May 12, 2015 5:24:54 AM",
                "text": "finally watching 50 shades of grey and im slightly disturbed and getting constant chills",
                "id": 597965647419609088,
                "similarity": 0.10816244199779232
            },
            {
                "date": "May 12, 2015 5:27:30 AM",
                "text": "I love 50 shades of grey and ill watch it 30 times.",
                "id": 597966301710176256,
                "similarity": 0.0789451526633326
            },
            {
                "date": "May 12, 2015 5:28:59 AM",
                "text": "After that episode, Stannis has become my favorite character. Stannis and Sansa. #GameofThrones",
                "id": 597966674998927360,
                "similarity": 0.09366890879010778
            },
            {
                "date": "May 12, 2015 5:35:21 AM",
                "text": "@punkypeggy Yeeeeees. And Jon Snow. And I\u0027m finding Little Finger fascinating… Not sure I like or loathe, but… Interesting… And Arya.",
                "id": 597968277218799616,
                "similarity": 0.14312935688887019
            },
            {
                "date": "May 12, 2015 5:35:26 AM",
                "text": "24 Reasons Why Jaime Lannister Is The Sexiest Man On \"Game Of Thrones\": Who knows what that metal hand could d... http://t.co/mwTN62JCgT",
                "id": 597968298202902528,
                "similarity": 0.128799434799169
            },
            {
                "date": "May 12, 2015 5:40:30 AM",
                "text": "New #Post-It #Notes Item Yellow and Grey Zig Zag Pattern http://t.co/zpQul2Wp8C http://t.co/zLjYfAOfLM",
                "id": 597969573275664384,
                "similarity": 0.06664039855741596
            },
            {
                "date": "May 12, 2015 5:43:53 AM",
                "text": "Game of Thrones Cast Before They Were Famous http://t.co/dYWIQL3roU",
                "id": 597970424706641920,
                "similarity": 0.06491413371581956
            },
            {
                "date": "May 12, 2015 6:09:44 AM",
                "text": "\"Look they hid their dildos by the stark trek stuff.\" 😂😂😂😂😂",
                "id": 597976930068078592,
                "similarity": 0.0866951833066662
            },
            {
                "date": "May 12, 2015 6:11:13 AM",
                "text": "I wish there was a snow storm",
                "id": 597977303373651969,
                "similarity": 0.13092655299229383
            },
            {
                "date": "May 12, 2015 6:28:39 AM",
                "text": "does anyone have the game of thrones books and want to lend them to me??? 😇😇",
                "id": 597981690598977536,
                "similarity": 0.12604104333901023
            },
            {
                "date": "May 12, 2015 6:30:17 AM",
                "text": "Searching for the sun in a world of grey.",
                "id": 597982101649031168,
                "similarity": 0.08311732420710319
            },
            {
                "date": "May 12, 2015 6:31:30 AM",
                "text": "ngl 50shades of grey was one of the best movies I\u0027ve ever seen..",
                "id": 597982407829106688,
                "similarity": 0.15289137103444864
            },
            {
                "date": "May 12, 2015 6:31:55 AM",
                "text": "you want that early worm? then be the determined sparrow",
                "id": 597982512711737344,
                "similarity": 0.0675415211696001
            },
            {
                "date": "May 12, 2015 6:47:02 AM",
                "text": "Legal, aí eu mando o Montanha ou o cara que lutou pelo Tyrion pra me defender. https://t.co/iAZQdcqdct",
                "id": 597986316933013504,
                "similarity": 0.05420675720133835
            },
            {
                "date": "May 12, 2015 6:49:10 AM",
                "text": "All Time: Hida Mountains, Japan  We honestly did not keep track of how much snow fell that week and did not have a… http://t.co/XdqjIlnKTg",
                "id": 597986853791334400,
                "similarity": 0.06360006934636431
            },
            {
                "date": "May 12, 2015 6:50:19 AM",
                "text": "@TaylorTrobridge bleach and toner are my bff!! I just died it ash blonde today so it\u0027s like blonde and grey mwahhahahaa I\u0027m tryna go white!",
                "id": 597987143210770432,
                "similarity": 0.12071670877530938
            },
            {
                "date": "May 12, 2015 6:50:33 AM",
                "text": "Can\u0027t believe Don Draper really was a plant for Abu Nazir. #GameofThrones",
                "id": 597987201910181890,
                "similarity": 0.10336531850380114
            },
            {
                "date": "May 12, 2015 6:52:25 AM",
                "text": "@TuffyPoo @gggbsmile throw water o re yourself at the water stops. Cold swim afterwards. At least it\u0027s not snow and ice.",
                "id": 597987671689003008,
                "similarity": 0.09731536272140431
            },
            {
                "date": "May 12, 2015 6:52:37 AM",
                "text": "#ca04\nsnow white",
                "id": 597987722037334016,
                "similarity": 0.051402976629267516
            },
            {
                "date": "May 12, 2015 7:01:38 AM",
                "text": "@E_L_James \nGrey that both enchanted us !! Ana, the \"stubbornness! Translated into strong personality, who loves but wants to be herself +",
                "id": 597989991143350272,
                "similarity": 0.09990414424593734
            },
            {
                "date": "May 12, 2015 7:18:13 AM",
                "text": "@CanadianBankin get tyrion to danerys and they could be fun to watch together",
                "id": 597994164488286208,
                "similarity": 0.2002549506364601
            },
            {
                "date": "May 12, 2015 7:21:02 AM",
                "text": "I got a headache just cause those shitty things lyk masks thrones kai\u0027s blood shirt baekhyun high notes and xiumin part eeuunngghhh 😢😢😢😢",
                "id": 597994873325637632,
                "similarity": 0.06220840881487806
            },
            {
                "date": "May 12, 2015 7:21:17 AM",
                "text": "Tried to watch an episode of Game of Thrones. Still in shock. Pls read the books. I\u0027ll read them to you. https://t.co/BYXKVvDnGi",
                "id": 597994936244510720,
                "similarity": 0.0805418861763455
            },
            {
                "date": "May 12, 2015 7:28:24 AM",
                "text": "w/ my mom and it was pissing big fat October drops of rain. instant soaking.  was a dark steel grey morning. proly my earliest mrkt memory",
                "id": 597996727195422720,
                "similarity": 0.1342937013017107
            },
            {
                "date": "May 12, 2015 7:32:00 AM",
                "text": "KADEBOSTANY — Castle In The Snow (Bentley Grey Nu Disco rmx) — слушать, смотреть видео, текст песни — Радио ENERGY 10 http://t.co/81Rvcx3R3U",
                "id": 597997633165238272,
                "similarity": 0.05863459306117775
            },
            {
                "date": "May 12, 2015 7:35:09 AM",
                "text": "تصاميم ملكية من مجموعة محمد آشي The Grey Garden\n http://t.co/cpVxbKYKZX \n\n#بماذا_تشتهر_الكويت\n#اكتر_صوت_بيعصبك",
                "id": 597998425884483584,
                "similarity": 0.10870295236237491
            },
            {
                "date": "May 12, 2015 7:54:27 AM",
                "text": "Jon is shooting 5/5 from the 3 joe.",
                "id": 598003282879991808,
                "similarity": 0.11611240702021972
            },
            {
                "date": "May 12, 2015 8:05:19 AM",
                "text": "tywin lannister was a dick but he was an interesting character. bye bye miss american pie.",
                "id": 598006017595609088,
                "similarity": 0.1253861386342055
            },
            {
                "date": "May 12, 2015 8:28:23 AM",
                "text": "“@Cats: This Little Kitten Has The Heart Of A Lion!\n►http://t.co/bHanBISDsk http://t.co/TcfQMKaBux” a grey for you! @Rockstarpup",
                "id": 598011822503907329,
                "similarity": 0.07557034413589503
            },
            {
                "date": "May 12, 2015 8:46:12 AM",
                "text": "G, A Breath of Snow and Ashes (Outlander), Gabaldon, Diana, 0440225809, Book http://t.co/EnsQPZPPKL http://t.co/0gIQzuIWIc",
                "id": 598016306210861057,
                "similarity": 0.0700745908571378
            },
            {
                "date": "May 12, 2015 9:15:36 AM",
                "text": "Of the end of a family saga and a fresh start:  http://t.co/EGDeDiLcub #GameOfThrones",
                "id": 598023704950407168,
                "similarity": 0.12117709088994451
            },
            {
                "date": "May 12, 2015 9:17:01 AM",
                "text": "Sophie Turner NUDE PHOTOS - http://t.co/G6gkLDp8Ms  #SophieTurner @SophieT #celebs #leakedphotos #GameOfThrones",
                "id": 598024061478907904,
                "similarity": 0.0550111741141066
            },
            {
                "date": "May 12, 2015 9:21:44 AM",
                "text": "Game of thrones before a long day of Maths 🙆 #altrimentinonvivopiù",
                "id": 598025248479522816,
                "similarity": 0.07606786369939085
            },
            {
                "date": "May 12, 2015 9:25:52 AM",
                "text": "Joe has pointed out that the Earl Grey Tea is his and the Green Tea is Hope\u0027s \"Just so I know!\" What the fuck would I want with Wakky Bags?",
                "id": 598026288645963776,
                "similarity": 0.19687563624827073
            },
            {
                "date": "May 12, 2015 9:26:47 AM",
                "text": "#なうぷれ The Bird and the Worm / OWL CITY",
                "id": 598026519336734720,
                "similarity": 0.19275171376420103
            },
            {
                "date": "May 12, 2015 9:38:01 AM",
                "text": "@Fr3nchAnni3 I like the stonemen. Looks like Jorah will have #greyscale setting in. I am beginning to really like Stannis too #tvchat #GoT",
                "id": 598029346276708352,
                "similarity": 0.05908653678641341
            },
            {
                "date": "May 12, 2015 5:36:28 PM",
                "text": "The Game of Thrones lovers now have an app to relive GOT times. Download Mojo Earn Rewards. http://t.co/1kte1ahfCG https://t.co/MPiBrHj2M9",
                "id": 598149752161632256,
                "similarity": 0.05422067159814951
            },
            {
                "date": "May 12, 2015 5:38:17 PM",
                "text": "is it ok to complain about the heat yet? what if i tell you i always liked the snow and cold",
                "id": 598150209353428992,
                "similarity": 0.16511264261711397
            },
            {
                "date": "May 12, 2015 5:40:03 PM",
                "text": "I feel the worm is turning",
                "id": 598150653970653184,
                "similarity": 0.08459289851599382
            }

        ]

        $scope.graph = null;
        $scope.displayCluster = false;
        $scope.showCluster = function () {
            $scope.displayCluster = !$scope.displayCluster;
            var tweetsSorted = $scope.tweets.sort(function (a, b) {
                return parseFloat(b.similarity) - parseFloat(a.similarity)
            });

            if ($scope.displayCluster) {
                var tweetData = [];
                var ii = 1;
                for (var i in tweetsSorted) {
                    var tweet = tweetsSorted[i];
                    var tweetDD = [];
                    tweetDD.push(ii++);
                    tweetDD.push(tweet.similarity);
                    //console.log(tweet.id);
                    tweetData.push(tweetDD);

                }
                //console.log(tweetData);


                var data = {

                    chart: {
                        type: 'column',
                        renderTo: 'container'
                    },
                    title: {
                        text: 'Cosinus similarity results'
                    },
                    xAxis: {},
                    yAxis: {

                        min: 0,
                        //max: 1,
                        title: {
                            text: 'Percentage (%)'
                        },

                        plotLines: [
                            {
                                color: 'red',
                                dashStyle: 'line', // Style of the plot line. Default to solid
                                value: 0.1, // Value of where the line will appear
                                width: 2,
                                zIndex: 10000,
                                // Width of the line  
                                label: {
                                    text: 'seuil' // Content of the label.
                                }
                            }
                        ]
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: 'Cosinus similartiy: <b>{point.y:.1f}%</b>'
                    },
                    series: [{
                        name: 'Population',
                        data: tweetData
                        /*data: [
                         ['Shanghai', 23.7],
                         ['Lagos', 16.1],
                         ['Instanbul', 14.2],
                         ['Karachi', 14.0],
                         ['Mumbai', 12.5],
                         ['Moscow', 12.1],
                         ['São Paulo', 11.8],
                         ['Beijing', 11.7],
                         ['Guangzhou', 11.1],
                         ['Delhi', 11.1],
                         ['Shenzhen', 10.5],
                         ['Seoul', 10.4],
                         ['Jakarta', 10.0],
                         ['Kinshasa', 9.3],
                         ['Tianjin', 9.3],
                         ['Tokyo', 9.0],
                         ['Cairo', 8.9],
                         ['Dhaka', 8.9],
                         ['Mexico City', 8.9],
                         ['Lima', 8.9]
                         ]*/

                    }]
                };


                if ($scope.graph != null)
                    $scope.graph.destroy();

                $scope.graph = new Highcharts.Chart(data);

            }
        }

    }]);