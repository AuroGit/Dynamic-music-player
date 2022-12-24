"use strict";

// Playlists
var unlockMar = false;
const mes = new Date().getMonth(), dia = new Date().getDate();
const playLists = [
    {
        nombre : "Hit Juice",
        lista : [
            {
                id : 0,
                nombre: "Hymn For The Weekend - Coldplay",
                duracion: "3:50",
                url : "./assets/playlists/hitJuice/songs/Coldplay - Hymn for the weekend.mp3",
                record: "./assets/playlists/hitJuice/records/hymn-for-the-weekend.png"
            },
            {
                id : 1,
                nombre: "Without You - The Kid Laroi",
                duracion: "3:50",
                url : "./assets/playlists/hitJuice/songs/The Kid Laroi - Without You.mp3",
                record: "./assets/playlists/hitJuice/records/without-you.png"
            },
            {
                id : 2,
                nombre: "Faded - Alan Walker",
                duracion: "4:20",
                url : "./assets/playlists/hitJuice/songs/Alan Walker - Faded.mp3",
                record: "./assets/playlists/hitJuice/records/faded.png"
            },
            {
                id : 3,
                nombre: "Rockabye - Clean Bandit ft Sean Paul & Anne Marie",
                duracion: "3:06",
                url : "./assets/playlists/hitJuice/songs/Clean Bandit ft Sean Paul & Anne Marie - Rockabye.mp3",
                record: "./assets/playlists/hitJuice/records/rockabye.png"
            },
            {
                id : 4,
                nombre: "Stressed Out - Twenty One Pilots",
                duracion: "3:44",
                url : "./assets/playlists/hitJuice/songs/Twenty One Pilots - Stressed Out.mp3",
                record: "./assets/playlists/hitJuice/records/stressed-out.png"
            },
            {
                id : 5,
                nombre: "Girls Like You - Maroon 5 ft. Cardi B",
                duracion: "3:06",
                url : "./assets/playlists/hitJuice/songs/Maroon 5 ft. Cardi B - Girls Like You.mp3",
                record: "./assets/playlists/hitJuice/records/girls-like-you.png"
            },
            {
                id : 6,
                nombre: "Bad Guy - Billie Eilish",
                duracion: "2:47",
                url : "./assets/playlists/hitJuice/songs/Billie Eilish - Bad guy.mp3",
                record: "./assets/playlists/hitJuice/records/bad-guy.png"
            },
            {
                id : 7,
                nombre: "Wake Me Up - Avicii",
                duracion: "4:08",
                url : "./assets/playlists/hitJuice/songs/Avicii - Wake me up.mp3",
                record: "./assets/playlists/hitJuice/records/wake-me-up.png"
            },
            {
                id : 8,
                nombre: "Blinding Lights - The Weekend",
                duracion: "3:36",
                url : "./assets/playlists/hitJuice/songs/The Weekend - Blinding Lights.mp3",
                record: "./assets/playlists/hitJuice/records/blinding-lights.png"
            }
        ],
        listImg : "./assets/playlists/hitJuice/hitJuice-bg.webp",
        listRecord : "./assets/playlists/hitJuice/hitJuice-record.png",
        listCase : "./assets/playlists/hitJuice/hitJuice-case.png"
    },
    {
        nombre : "Teen Spirit",
        lista : [
            {
                id : 0,
                nombre: "Boulevard Of Broken Dreams - Green Day",
                duracion: "3:35",
                url : "./assets/playlists/teenSpirit/songs/Green Day - Boulevard of broken dreams.mp3",
                record: "./assets/playlists/teenSpirit/records/boulevard-of-broken-dreams.png"
            },
            {
                id : 1,
                nombre: "Always - Blink 182",
                duracion: "4:03",
                url : "./assets/playlists/teenSpirit/songs/Blink 182 - Always.mp3",
                record: "./assets/playlists/teenSpirit/records/always.png"
            },
            {
                id : 2,
                nombre: "With Me - Sum 41",
                duracion: "4:51",
                url : "./assets/playlists/teenSpirit/songs/Sum 41 - With me.mp3",
                record: "./assets/playlists/teenSpirit/records/with-me.png"
            },
            {
                id : 3,
                nombre: "Self Esteem - The Offspring",
                duracion: "4:03",
                url : "./assets/playlists/teenSpirit/songs/The Offspring - Self Esteem.mp3",
                record: "./assets/playlists/teenSpirit/records/self-esteem.png"
            },
            {
                id : 4,
                nombre: "The Beginning - One Ok Rock",
                duracion: "4:51",
                url : "./assets/playlists/teenSpirit/songs/One Ok Rock - The Beginning.mp3",
                record: "./assets/playlists/teenSpirit/records/the-beginning.png"
            },
            {
                id : 5,
                nombre: "Noots - Sum 41",
                duracion: "3:29",
                url : "./assets/playlists/teenSpirit/songs/Sum 41 - Noots.mp3",
                record: "./assets/playlists/teenSpirit/records/noots.png"
            },
            {
                id : 6,
                nombre: "All The Things She Said - T.a.t.u.",
                duracion: "2:11",
                url : "./assets/playlists/teenSpirit/songs/Tattoo - All The Things She Said.mp3",
                record: "./assets/playlists/teenSpirit/records/all-the-things-she-said.png"
            },
            {
                id : 7,
                nombre: "Perfect - Simple Plan",
                duracion: "3:37",
                url : "./assets/playlists/teenSpirit/songs/Simple Plan - Perfect.mp3",
                record: "./assets/playlists/teenSpirit/records/perfect.png"
            },
            {
                id : 8,
                nombre: "Basket Case - Green Day",
                duracion: "3:03",
                url : "./assets/playlists/teenSpirit/songs/Green Day - Basket case.mp3",
                record: "./assets/playlists/teenSpirit/records/basket-case.png"
            }
        ],
        listImg : "./assets/playlists/teenSpirit/teenSpirit-bg.webp",
        listRecord : "./assets/playlists/teenSpirit/teenSpirit-record.png",
        listCase : "./assets/playlists/teenSpirit/teenSpirit-case.png"
    },
    {
        nombre : "Jangueo",
        lista : [
            {
                id : 0,
                nombre: "Provenza - Karol G",
                duracion: "3:33",
                url : "./assets/playlists/jangueo/songs/Karol G - Provenza.mp3",
                record: "./assets/playlists/jangueo/records/provenza.png"
            },
            {
                id : 1,
                nombre: "2Catorce - Rauw Alejandro",
                duracion: "2:43",
                url : "./assets/playlists/jangueo/songs/Rauw Alejandro - 2Catorce.mp3",
                record: "./assets/playlists/jangueo/records/2catorce.png"
            },
            {
                id : 2,
                nombre: "Me Porto Bonito - Bad Bunny",
                duracion: "3:02",
                url : "./assets/playlists/jangueo/songs/Bad Bunny - Me porto bonito.mp3",
                record: "./assets/playlists/jangueo/records/me-porto-bonito.png"
            },
            {
                id : 3,
                nombre: "12x3 - Dekko",
                duracion: "2:38",
                url : "./assets/playlists/jangueo/songs/Dekko - 12x3.mp3",
                record: "./assets/playlists/jangueo/records/12x3.png"
            },
            {
                id : 4,
                nombre: "Traductor - Myke Towers",
                duracion: "2:53",
                url : "./assets/playlists/jangueo/songs/Myke Towers - Traductor.mp3",
                record: "./assets/playlists/jangueo/records/traductor.png"
            },
            {
                id : 5,
                nombre: "Keii - Anuel AA",
                duracion: "2:49",
                url : "./assets/playlists/jangueo/songs/Anuel AA - Keii.mp3",
                record: "./assets/playlists/jangueo/records/keii.png"
            },
            {
                id : 6,
                nombre: "Que Locura - J Balvin",
                duracion: "3:01",
                url : "./assets/playlists/jangueo/songs/J Balvin - Que locura.mp3",
                record: "./assets/playlists/jangueo/records/que-locura.png"
            },
            {
                id : 7,
                nombre: "Número 1 - Oscu ft Nobeat",
                duracion: "2:28",
                url : "./assets/playlists/jangueo/songs/Oscu ft Nobeat - Número 1.mp3",
                record: "./assets/playlists/jangueo/records/numero-1.png"
            },
            {
                id : 8,
                nombre: "Mamiii - Karol G ft Becky G",
                duracion: "3:22",
                url : "./assets/playlists/jangueo/songs/Karol G ft Becky G - Mamiii.mp3",
                record: "./assets/playlists/jangueo/records/mamiii.png"
            },            
            {
                id : 9,
                nombre: "Me Niego - Ozuna ft Reik & Wisin",
                duracion: "3:12",
                url : "./assets/playlists/jangueo/songs/Ozuna ft Reik Wisin -  Me niego.mp3",
                record: "./assets/playlists/jangueo/records/me-niego.png"
            },
            {
                id : 10,
                nombre: "Dákiti - Bad Bunny",
                duracion: "3:25",
                url : "./assets/playlists/jangueo/songs/Bad Bunny - Dakiti.mp3",
                record: "./assets/playlists/jangueo/records/dakiti+yonaguni.png"
            },
            {
                id : 11,
                nombre: "Reggaeton Lento - CNCO",
                duracion: "3:35",
                url : "./assets/playlists/jangueo/songs/CNCO - Reggaeton lento.mp3",
                record: "./assets/playlists/jangueo/records/reggaeton-lento.png"
            },
            {
                id : 12,
                nombre: "Diosa - Myke Towers",
                duracion: "2:46",
                url : "./assets/playlists/jangueo/songs/Myke Towers - Diosa.mp3",
                record: "./assets/playlists/jangueo/records/diosa.png"
            },
            {
                id : 13,
                nombre: "No Me Acuerdo - Thalía ft Natti Natasha",
                duracion: "3:34",
                url : "./assets/playlists/jangueo/songs/Thalía ft Natti Natasha - No me acuerdo.mp3",
                record: "./assets/playlists/jangueo/records/no-me-acuerdo.png"
            }
        ],
        listImg : "./assets/playlists/jangueo/jangueo-bg.webp",
        listRecord : "./assets/playlists/jangueo/jangueo-record.png",
        listCase : "./assets/playlists/jangueo/jangueo-case.png"
    },
    {
        nombre : "Gines' Rap",
        lista : [
            {
                id : 0,
                nombre: "Anestesia - Done",
                duracion: "2:43",
                url : "./assets/playlists/ginesRap/songs/Done - Anestesia.mp3",
                record: "./assets/playlists/ginesRap/records/anestesia.png"
            },
            {
                id : 1,
                nombre: "Bonus Trap - Done",
                duracion: "2:12",
                url : "./assets/playlists/ginesRap/songs/Done - Bonus Trap.mp3",
                record: "./assets/playlists/ginesRap/records/bonus-trap+tirando-piedras.png"
            },
            {
                id : 2,
                nombre: "Tekken - Done & MC Lito",
                duracion: "2:59",
                url : "./assets/playlists/ginesRap/songs/Done & MC Lito - Tekken.mp3",
                record: "./assets/playlists/ginesRap/records/tekken.png"
            },
            {
                id : 3,
                nombre: "Tirando Piedras - Done",
                duracion: "2:47",
                url : "./assets/playlists/ginesRap/songs/Done - Tirando piedras.mp3",
                record: "./assets/playlists/ginesRap/records/bonus-trap+tirando-piedras.png"
            },
            {
                id : 4,
                nombre: "Podium - Done X Clec",
                duracion: "2:11",
                url : "./assets/playlists/ginesRap/songs/Done X Clec - Podium.mp3",
                record: "./assets/playlists/ginesRap/records/podium.png"
            }
        ],
        listImg : "./assets/playlists/ginesRap/ginesRap-bg.webp",
        listRecord : "./assets/playlists/ginesRap/ginesRap-record.png",
        listCase : "./assets/playlists/ginesRap/ginesRap-case.png"
    },
    {
        nombre : "GalStars",
        lista : [
            {
                id : 0,
                nombre: "Levitating - Dua Lipa",
                duracion: "2:54",
                url : "./assets/playlists/galStars/songs/Dua Lipa - Levitating.mp3",
                record: "./assets/playlists/galStars/records/levitating.png"
            },
            {
                id : 1,
                nombre: "Chandelier - Sia",
                duracion: "3:26",
                url : "./assets/playlists/galStars/songs/Sia - Chandelier.mp3",
                record: "./assets/playlists/galStars/records/chandelier.png"
            },
            {
                id : 2,
                nombre: "Dark Horse - Katy Perry",
                duracion: "4:23",
                url : "./assets/playlists/galStars/songs/Katy Perry - Dark horse.mp3",
                record: "./assets/playlists/galStars/records/dark-horse.png"
            },
            {
                id : 3,
                nombre: "Don't Be Shy - Tiësto & Karol G",
                duracion: "2:20",
                url : "./assets/playlists/galStars/songs/Tiësto & Karol G - Don't Be Shy.mp3",
                record: "./assets/playlists/galStars/records/dont-be-shy.png"
            },
            {
                id : 4,
                nombre: "Señorita - Camila Cabello & Shawn Mendes",
                duracion: "3:37",
                url : "./assets/playlists/galStars/songs/Camila Cabello & Shawn Mendes - Señorita.mp3",
                record: "./assets/playlists/galStars/records/señorita.png"
            },
            {
                id : 5,
                nombre: "Sweet But Psycho - Ava Max",
                duracion: "3:22",
                url : "./assets/playlists/galStars/songs/Ava Max - Sweet but psycho.mp3",
                record: "./assets/playlists/galStars/records/sweet-but-psycho.png"
            },
            {
                id : 6,
                nombre: "Bad Romance - Lady Gaga",
                duracion: "3:03",
                url : "./assets/playlists/galStars/songs/Lady Gaga - Bad romance.mp3",
                record: "./assets/playlists/galStars/records/bad-romance.png"
            }
        ],
        listImg : "./assets/playlists/galStars/galStars-bg.webp",
        listRecord : "./assets/playlists/galStars/galStars-record.png",
        listCase : "./assets/playlists/galStars/galStars-case.png"
    },
    {
        nombre : "Metal Mood",
        lista : [
            {
                id : 0,
                nombre: "Numb - Linkin Park",
                duracion: "3:18",
                url : "./assets/playlists/metalMood/songs/Linkin Park - Numb.mp3",
                record: "./assets/playlists/metalMood/records/numb.png"
            },
            {
                id : 1,
                nombre: "Monster - Skillet",
                duracion: "3:06",
                url : "./assets/playlists/metalMood/songs/Skillet - Monster.mp3",
                record: "./assets/playlists/metalMood/records/monster.png"
            },
            {
                id : 2,
                nombre: "The Diary Of Jane - Breaking Benjamin",
                duracion: "3:06",
                url : "./assets/playlists/metalMood/songs/Breaking Benjamin - The diary of Jane.mp3",
                record: "./assets/playlists/metalMood/records/diary-of-jane.png"
            },
            {
                id : 3,
                nombre: "Drown - Bring Me The Horizon",
                duracion: "3:15",
                url : "./assets/playlists/metalMood/songs/Bring Me The Horizon - Drown.mp3",
                record: "./assets/playlists/metalMood/records/drown.png"
            },
            {
                id : 4,
                nombre: "Let It Burn - Citizen Soldier",
                duracion: "4:13",
                url : "./assets/playlists/metalMood/songs/Citizen soldier - Let it burn.mp3",
                record: "./assets/playlists/metalMood/records/let-it-burn.png"
            },
            {
                id : 5,
                nombre: "Stricken - Disturbed",
                duracion: "3:46",
                url : "./assets/playlists/metalMood/songs/Disturbed - Stricken.mp3",
                record: "./assets/playlists/metalMood/records/stricken.png"
            },
            {
                id : 6,
                nombre: "Bring Me To Life - Evanescence",
                duracion: "3:53",
                url : "./assets/playlists/metalMood/songs/Evanescence - Bring me to life.mp3",
                record: "./assets/playlists/metalMood/records/bring-me-to-life.png"
            },
            {
                id : 7,
                nombre: "Chop Suey - System of a Down",
                duracion: "3:32",
                url : "./assets/playlists/metalMood/songs/System of a Down - Chop Suey.mp3",
                record: "./assets/playlists/metalMood/records/chop-suey.png"
            },
            {
                id : 8,
                nombre: "Cold - Evans Blue",
                duracion: "3:53",
                url : "./assets/playlists/metalMood/songs/Evans Blue - Cold.mp3",
                record: "./assets/playlists/metalMood/records/cold.png"
            },
            {
                id : 9,
                nombre: "Last Resort - Papa Roach",
                duracion: "3:13",
                url : "./assets/playlists/metalMood/songs/Papa Roach - Last Resort.mp3",
                record: "./assets/playlists/metalMood/records/last-resort.png"
            },
            {
                id : 10,
                nombre: "Your Betrayal - Bullet For My Valentine",
                duracion: "3:00",
                url : "./assets/playlists/metalMood/songs/Bullet For My Valentine - Your betrayal.mp3",
                record: "./assets/playlists/metalMood/records/your-betrayal.png"
            },
            {
                id : 11,
                nombre: "Before I Forget - Slipknot",
                duracion: "4:27",
                url : "./assets/playlists/metalMood/songs/Slipknot - Before I Forget.mp3",
                record: "./assets/playlists/metalMood/records/before-i-forget.png"
            }
        ],
        listImg : "./assets/playlists/metalMood/metalMood-bg.webp",
        listRecord : "./assets/playlists/metalMood/metalMood-record.png",
        listCase : "./assets/playlists/metalMood/metalMood-case.png"
    },
    {
        nombre : "Time Machine",
        lista : [
            {
                id : 0,
                nombre: "Zombie - The Cranberries",
                duracion: "4:04",
                url : "./assets/playlists/timeMachine/songs/The Cranberries - Zombie.mp3",
                record: "./assets/playlists/timeMachine/records/zombie.png"
            },
            {
                id : 1,
                nombre: "Smooth Criminal - Michael Jackson",
                duracion: "4:17",
                url : "./assets/playlists/timeMachine/songs/Michael Jackson - Smooth Criminal.mp3",
                record: "./assets/playlists/timeMachine/records/smooth-criminal.png"
            },
            {
                id : 2,
                nombre: "Big In Japan - Alphaville",
                duracion: "4:07",
                url : "./assets/playlists/timeMachine/songs/Alphaville - Big in Japan.mp3",
                record: "./assets/playlists/timeMachine/records/big-in-japan.png"
            },
            {
                id : 3,
                nombre: "Africa - Toto",
                duracion: "4:23",
                url : "./assets/playlists/timeMachine/songs/Toto - Africa.mp3",
                record: "./assets/playlists/timeMachine/records/africa.png"
            },
            {
                id : 4,
                nombre: "Died In Your Arms - Cutting Crew",
                duracion: "2:39",
                url : "./assets/playlists/timeMachine/songs/Cutting Crew - Died in your arms.mp3",
                record: "./assets/playlists/timeMachine/records/died-in-your-arms.png"
            },
            {
                id : 5,
                nombre: "Don't Speak - No Doubt",
                duracion: "4:23",
                url : "./assets/playlists/timeMachine/songs/No doubt - Dont speak.mp3",
                record: "./assets/playlists/timeMachine/records/dont-speak.png"
            },
            {
                id : 6,
                nombre: "Billie Jean - Michael Jackson",
                duracion: "3:32",
                url : "./assets/playlists/timeMachine/songs/Michael Jackson - Billie Jean.mp3",
                record: "./assets/playlists/timeMachine/records/billie-jean.png"
            },
            {
                id : 7,
                nombre: "Livin On A Prayer - Bon Jovi",
                duracion: "4:06",
                url : "./assets/playlists/timeMachine/songs/Bon Jovi - Livin on a prayer.mp3",
                record: "./assets/playlists/timeMachine/records/living-on-a-prayer.png"
            }
        ],
        listImg : "./assets/playlists/timeMachine/timeMachine-bg.webp",
        listRecord : "./assets/playlists/timeMachine/timeMachine-record.png",
        listCase : "./assets/playlists/timeMachine/timeMachine-case.png"
    }    
];
const marPlaylist = {
            nombre : "Mar",
            lista : [
                {
                    id : 0,
                    nombre: "Bichota - Karol G",
                    duracion: "2:56",
                    url : "./assets/playlists/mar/songs/Karol G - Bichota.mp3",
                    record: "./assets/playlists/mar/records/ay-dios-mio+bichota.png"
                },
                {
                    id : 1,
                    nombre: "Snow Tha Product - BZRP Music Sessions #39",
                    duracion: "2:55",
                    url : "./assets/playlists/mar/songs/Snow Tha Product - BZRP Music Sessions39.mp3",
                    record: "./assets/playlists/mar/records/snow-the-product.png"
                },
                {
                    id : 2,
                    nombre: "Borró Cassette - Maluma",
                    duracion: "3:27",
                    url : "./assets/playlists/mar/songs/Maluma - Borró Cassette.mp3",
                    record: "./assets/playlists/mar/records/borro-casette.png"
                },
                {
                    id : 3,
                    nombre: "Colocao - Nicki Nicole",
                    duracion: "3:00",
                    url : "./assets/playlists/mar/songs/Nicki Nicole - Colocao.mp3",
                    record: "./assets/playlists/mar/records/colocao.png"
                },
                {
                    id : 4,
                    nombre: "A Tu Merced - Bad Bunny",
                    duracion: "2:56",
                    url : "./assets/playlists/mar/songs/Bad Bunny - A tu merced.mp3",
                    record: "./assets/playlists/mar/records/a-tu-merced.png"
                },
                {
                    id : 5,
                    nombre: "No Mienten - Becky G",
                    duracion: "2:27",
                    url : "./assets/playlists/mar/songs/Becky G - No mienten.mp3",
                    record: "./assets/playlists/mar/records/no-mienten.png"
                },
                {
                    id : 6,
                    nombre: "Patio De La Cárcel - Omar Montes ft Farruko",
                    duracion: "3:29",
                    url : "./assets/playlists/mar/songs/Omar Montes ft Farruko - Patio de la Cárcel.mp3",
                    record: "./assets/playlists/mar/records/patio-de-la-carcel.png"
                },
                {
                    id : 7,
                    nombre: "Sejodióto - Karol G",
                    duracion: "2:59",
                    url : "./assets/playlists/mar/songs/Karol G - Sejodióto.mp3",
                    record: "./assets/playlists/mar/records/sejodioto.png"
                },
                {
                    id : 8,
                    nombre: "Agua De Jamaica - Maluma",
                    duracion: "2:57",
                    url : "./assets/playlists/mar/songs/Maluma - Agua de Jamaica.mp3",
                    record: "./assets/playlists/mar/records/agua-de-jamaica.png"
                },
                {
                    id : 9,
                    nombre: "Ella No Es Tuya - Nicki Nicole ft Rochy RD & Myke Towers",
                    duracion: "3:38",
                    url : "./assets/playlists/mar/songs/Nicki Nicole ft Rochy RD & Myke Towers - Ella No Es Tuya.mp3",
                    record: "./assets/playlists/mar/records/ella-no-es-tuya.png"
                },
                {
                    id : 10,
                    nombre: "Mala Santa - Becky G",
                    duracion: "2:52",
                    url : "./assets/playlists/mar/songs/Becky G - Mala Santa.mp3",
                    record: "./assets/playlists/mar/records/mala-santa.png"
                },
                {
                    id : 11,
                    nombre: "Yonaguni - Bad Bunny",
                    duracion: "3:26",
                    url : "./assets/playlists/mar/songs/Bad Bunny - Yonaguni.mp3",
                    record: "./assets/playlists/mar/records/dakiti+yonaguni.png"
                },
                {
                    id : 12,
                    nombre: "Ay, Dios Mío! - Karol G",
                    duracion: "3:06",
                    url : "./assets/playlists/mar/songs/Karol G - Ay, Dios mío!.mp3",
                    record: "./assets/playlists/mar/records/ay-dios-mio+bichota.png"
                },
                {
                    id : 13,
                    nombre: "Quevedo - BZRP Music Sessions #52",
                    duracion: "3:18",
                    url : "./assets/playlists/mar/songs/Quevedo - BZRP Music Sessions52.mp3",
                    record: "./assets/playlists/mar/records/quedate.png"
                },
                {
                    id : 14,
                    nombre: "(Bonus Track) Mano Rota - Lagarto Amarillo",
                    duracion: "3:10",
                    url : "./assets/playlists/mar/songs/Lagarto Amarillo - Mano rota.mp3",
                    record: "./assets/playlists/mar/records/mano-rota.png"
                }
            ],
            listImg : "./assets/playlists/mar/mar-bg.webp",
            listRecord : "./assets/playlists/mar/mar-record.png",
            listCase : "./assets/playlists/mar/mar-case.png"
};

if ((mes == 11 && dia >= 30) || mes == 0 || unlockMar) {
    playLists.unshift(marPlaylist);
}

// Elementos
const audioSrc = document.querySelector(".audio-source"),
    player = document.getElementById("player"),
    title = document.getElementById("title"),
    discImg = document.getElementById("current-disc"),
    progress = document.getElementById("progress"),
    currentTime = document.querySelector(".current-time"),
    duration = document.querySelector(".duration"),
    volBtn = document.getElementById("volume"),
    volInput = document.getElementById("volume-input"),
    hideListBtn = document.getElementById("hide-list"),
    
    playBtn = document.getElementById("play"),
    prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next"),
    modeBtn = document.getElementById("mode"),
    backBtn = document.getElementById("back"),

    selector = document.querySelector(".playlist-selector"),
    playListBtn = document.getElementById("pl-table-show"),
    plList = document.getElementById("playlist-list"),
    randomPLBtn = document.getElementById("randomize"),
    sliderLBtn = document.getElementById("left-btn"),
    sliderRBtn = document.getElementById("right-btn"),

    themeBtn = document.getElementById("theme"),
    container = document.querySelector(".container"),
    logo = document.getElementById("full-logo"),
    symbol = document.getElementById("symbol"),
    
    pwWindow = document.querySelector(".password-window"),
    enterPw = document.querySelector(".enter-password");
    
// Variables globales
var selectorItemsArr = [],
    audioCtxt, analyser, dataArr, track, onPlay,
    fftSize = window.innerWidth < 700 ? 64 : 128,
    currentList = playLists[0].lista,
    playedTracksArr = [],
    currentTrack = 0,
    tracksToPlayArr = [],
    rotation = 0;

// Funciones Player
const setSong = id => {
    audioSrc.src = currentList[id].url;
    discImg.src = currentList[id].record.includes(".png") ? currentList[id].record : "./assets/images/record.png";
    rotation = 0;
    const playlistItemArr = document.querySelectorAll(".now-playing");
    playlistItemArr.forEach(el=>{el.removeAttribute("active")});
    playlistItemArr[id].setAttribute("active", "");
    audioSrc.addEventListener("canplaythrough", ()=>{
        progress.max = audioSrc.duration;
        duration.innerText = formatTime(audioSrc.duration);
        title.innerText = currentList[id].nombre;
    });
}
const createContext = ()=> {
    audioCtxt = new AudioContext() || new WebkitAudioContext();
    analyser = audioCtxt.createAnalyser();
    analyser.fftSize = fftSize;
    dataArr = new Uint8Array(analyser.frequencyBinCount);
    track = audioCtxt.createMediaElementSource(audioSrc);
    track.connect(analyser).connect(audioCtxt.destination);
}
const playPauseSong = ()=> {
    if (audioCtxt == null) createContext();
    if (audioSrc.paused) {
        audioSrc.play();
        clearInterval(onPlay);
        onPlay = setInterval(()=>seekUpdate(), 50);
        playBtn.childNodes[1].src = "assets/images/icons/pause-icon.svg";
    } else {
        audioSrc.pause();
        clearInterval(onPlay);
        playBtn.childNodes[1].src = "assets/images/icons/play-icon.svg";
    }
}
const stopSong = ()=> {
    audioSrc.pause();
    audioSrc.currentTime = 0;
    progress.value = 0;
    currentTime.innerText = "0:00";
    playBtn.childNodes[1].src = "assets/images/icons/play-icon.svg";
    clearInterval(onPlay);
    visualizerUpdate();
}
const seek = ()=> {
    audioSrc.currentTime = progress.value;
    currentTime.innerText = formatTime(audioSrc.currentTime);
}
const seekUpdate = ()=> {
    progress.value = audioSrc.currentTime;
    if (!audioSrc.paused) rotation = audioSrc.currentTime*10; rotation %= 360;
    discImg.style.transform = `rotate(${rotation}deg)`;
    currentTime.innerText = formatTime(audioSrc.currentTime);

    analyser.getByteTimeDomainData(dataArr);
    visualizerUpdate(dataArr);

    if (audioSrc.currentTime == audioSrc.duration) {
        stopSong();
        switch (modeBtn.dataset.value) {
            case "0":
                if (currentTrack < currentList.length - 1) prevNextSong();
                break;
            case "1":
                playPauseSong();
                break;
            case "2":
                if (tracksToPlayArr.length > 0) {
                    playedTracksArr.push(currentTrack);
                    currentTrack = tracksToPlayArr.shift();
                    setSong(currentTrack);
                    playPauseSong();
                } else {tracksArrReset();}
                break;
        }
    }
}
const prevNextSong = e => {
    if (audioCtxt == null) createContext();
    let id = e === undefined ? "next" : e.target.id;
    switch (id) {
        case "prev":
            if (modeBtn.dataset.value == 0) {
                currentTrack == 0 ? currentTrack = currentList.length - 1 : currentTrack--;
            } else if (modeBtn.dataset.value == 2 && playedTracksArr.length > 0) {
                tracksToPlayArr.unshift(currentTrack);
                currentTrack = playedTracksArr.pop();
            }
            break;
        case "next": default:
            if (modeBtn.dataset.value == 0) {
            currentTrack == currentList.length - 1 ? currentTrack = 0 : currentTrack++;
            } else if (modeBtn.dataset.value == 2 && tracksToPlayArr.length > 0) {
                playedTracksArr.push(currentTrack);
                currentTrack = tracksToPlayArr.shift();
            }
            break;
    }
    setSong(currentTrack);
    playPauseSong();
}
const muteAudioToggle = e => {
    if (e.target.id != "volume-input") {
        if (muteShape.style.visibility == "hidden" && audioSrc.volume != 0) {
            audioSrc.volume = 0;
            muteShape.style.visibility = "visible";
            volInput.classList.add("disabled");
        } else if (audioSrc.volume > 0 || muteShape.style.visibility == "visible"){
            audioSrc.volume = volInput.value;
            muteShape.style.visibility = "hidden";
            volInput.classList.remove("disabled");
        }
    }
}
const formatTime = time => {
    let min = Math.floor(time / 60);
    let seg = Math.floor(time % 60);
    if (seg < 10) seg = `0${seg}`;
    return `${min}:${seg}`;
}
const visualizerUpdate = arr => {
    if (arr == undefined) {
        arr = [];
        for (let i = 0; i < analyser.fftSize / 2; i++) {arr.push(128);}
    }
    for (let index in arr) {
        barsArr[index].style.height = arr[index] - 128 > 0 ? 
        `${(arr[index] * 1.5) + (arr[index] - 128) * 25}px` : 
        `${(arr[index] * 1.5)}px`;
    }
}
const visualizer = document.getElementById("visualizer");
const createVisualizer = ()=> {
    const fragment = document.createDocumentFragment();

    for(let i = 1; i <= fftSize / 2; i++) {
        const vBar = document.createElement("SPAN");
        fragment.appendChild(vBar);
        vBar.classList.add("bar");
    }
    visualizer.appendChild(fragment);
}
const maxVolShape = document.getElementById("max-vol"),
    midVolShape = document.getElementById("mid-vol"),
    minVolShape = document.getElementById("min-vol"),
    muteShape = document.getElementById("mute");
const volumeManager = ()=> {
    volInput.classList.remove("disabled");
    muteShape.style.visibility = "hidden";
    audioSrc.volume = volInput.value;
    volInput.title = `${Math.floor(volInput.value * 200)}%`;
    if (audioSrc.volume == 0) {
        muteShape.style.visibility = "visible";
        minVolShape.style.visibility = "hidden";
    } else if ((audioSrc.volume > 0 && audioSrc.volume <= .16)) {
        muteShape.style.visibility = "hidden";
        minVolShape.style.visibility = "visible";
        midVolShape.style.visibility = "hidden";
        maxVolShape.style.visibility = "hidden";
    } else if ((audioSrc.volume > .16 && audioSrc.volume <= .34)) {
        minVolShape.style.visibility = "visible";
        midVolShape.style.visibility = "visible";
        maxVolShape.style.visibility = "hidden";
    } else if ((audioSrc.volume > .34)) {
        minVolShape.style.visibility = "visible";
        midVolShape.style.visibility = "visible";
        maxVolShape.style.visibility = "visible";
    }
}
const playModeToggle = mode => {
    let playMode;
    if (mode === undefined) {
        playMode = parseInt(modeBtn.dataset.value);
        if (playMode < 2) playMode += 1; else playMode = 0;
    } else {playMode = mode;}
    switch (playMode) {
        case 0:
            modeBtn.childNodes[1].src = "assets/images/icons/ordered-icon.svg";
            modeBtn.dataset.value = "0";
            break;
        case 1:
            modeBtn.childNodes[1].src = "assets/images/icons/loop-icon.svg";
            modeBtn.dataset.value = "1";
            break;
        case 2:
            modeBtn.childNodes[1].src = "assets/images/icons/random-icon.svg";
            modeBtn.dataset.value = "2";
            tracksArrReset();
            break;
    }
}
const randomTrack = ()=> {
    const max = tracksToPlayArr.length == 0 ? currentList.length : tracksToPlayArr.length;
    let i = Math.floor(Math.random() * max - 1);
    return i;
}
const tracksArrReset = ()=> {
    playedTracksArr = [];
    tracksToPlayArr = [];
    let i = 0;
    while (tracksToPlayArr.length < currentList.length) {tracksToPlayArr.push(i); i++;}
    let index = tracksToPlayArr.indexOf(currentTrack);
    tracksToPlayArr.splice(index, 1);
    tracksToPlayArr.sort((a, b) => 0.5 - Math.random());
}
const goBack = ()=> {
    if (audioCtxt != null) stopSong();
    for (let item of selectorItemsArr) {
        item.removeAttribute("selected");
    }
    document.body.style.backgroundImage = "none";
    selector.style.pointerEvents = "none";
    fade([player, visualizer, symbol], [logo]);
    selector.classList.remove("compact");
    setTimeout(function(){selector.removeAttribute("style")},500);
}

// Funciones Selector y Playlist
var selectEvt;
const listName = document.getElementById("list-name");
const selectPlaylist = (e, match = false)=> {
    if (e == undefined) e = selectEvt;
    if (e.target.dataset.id == "play" || e.target.dataset.id == "select") {
        let newList = e.target.parentNode.parentNode.parentNode.id;
        if (newList === "mar" && !match && !sessionStorage.getItem("marUnlocked")) {
            selectEvt = e;
            pwWindow.classList.toggle("d-none");
            return;
        } else {
            selector.classList.add("compact");
            for (let item of playLists) {
                if (item.nombre.toLowerCase().replace(" ", "-") === newList) {
                    listName.innerText = item.nombre;
    
                    currentList = item.lista;
                    currentTrack = 0;
                    document.body.style.backgroundImage = `url('${item.listImg}')`;
                    const plItem = document.getElementById(item.nombre.toLowerCase().replace(" ", "-"));
                    plItem.setAttribute("selected", "");
                    break;
                }
                else continue;
            }
            fade([logo], [player, visualizer, symbol]);
            listUpdate();
            setSong(0);

            if (e.target.dataset.id == "play") {playPauseSong(); toggleList(false);}
            else if (e.target.dataset.id == "select") {
                toggleList(true);
                plList.classList.add("full-height-list")
            };
        }
    }
}
const toggleList = val => {
    if (val === undefined) {
        plList.classList.contains("show") ?
        plList.classList.remove("show") : plList.classList.add("show");
    } else {
        if (val) plList.classList.add("show");
        else if (!val) plList.removeAttribute("class");
    }
}
const listUpdate = ()=> {
    const trackList = document.getElementById("track-list");
    
    while (trackList.childElementCount > 0) {
        let lastItem = trackList.lastElementChild;
        trackList.removeChild(lastItem);
    }

    for (let index in currentList) {
        const fragment = document.createDocumentFragment();
        const plTrack = document.createElement("LI");

        let liHTML = `<span class="now-playing">
        <img width="10px" src="assets/images/icons/play-icon.svg" alt="">
        </span><span><p class="track-title">${currentList[index].nombre}</p></span>
        <span class="duration">${currentList[index].duracion}</span>`;
    
        plTrack.setAttribute("data-value", index);
        plTrack.classList.add("playlist-track");
        plTrack.innerHTML = liHTML;
        fragment.appendChild(plTrack);
        trackList.appendChild(fragment);
    }

    const songsArr = document.querySelectorAll(".playlist-track");
    songsArr.forEach(el=>{el.addEventListener("click", (e)=>{
        currentTrack = parseInt(e.target.dataset.value);
        setSong(currentTrack);
        playModeToggle(0);
        playPauseSong();
        plList.classList.remove("full-height-list");
        toggleList();
    })});
}
listUpdate();
const selectorCreate = ()=> {
    const ulElement = document.getElementById("list");
    for (let playlist of playLists) {
        const fragment = document.createDocumentFragment();
        const plItem = document.createElement("LI");

        let liHTML = `<div class="record">
            <img src="${playlist.listRecord || "assets/images/record.png"}" class="disc">
            <img src="${playlist.listCase}" class="case"></img>
            <div class="buttons">
                <button class="play-list" data-id="play">
                    <svg width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.39 75.39">
                        <path d="M9,72.34V3.05l52.8,27.22a8.35,8.35,0,0,1,0,14.85Z"/>
                    </svg>
                </button>
                <span class="select-list" data-id="select">Ver lista</span>
            </div>
        </div>
        <div class="playlist-name">
            <h2>${playlist.nombre}</h2>
        </div>`;
    
        plItem.id = playlist.nombre.toLowerCase().replace(" ", "-");
        plItem.classList.add("playlist-item");
        plItem.innerHTML = liHTML;
        
        fragment.appendChild(plItem);
        ulElement.appendChild(fragment);
    }
    selectorItemsArr = document.querySelectorAll(".playlist-item");
    selectorItemsArr.forEach(element => element.addEventListener("click", (e)=>selectPlaylist(e)));
}
selectorCreate();

const itemWidth = selector.querySelector(".playlist-item").clientWidth * .9;
const selectorScroll = e => {
    if (e.target.id == "left-btn") {
        selector.scroll({
            top: 0,
            left: selector.scrollLeft - itemWidth >= 0 ?
                selector.scrollLeft - itemWidth : 0,
            behavior: 'smooth'
        });
    } else if (e.target.id == "right-btn") {
        selector.scroll({
            top: 0,
            left: selector.scrollLeft + itemWidth <= selector.scrollWidth - selector.clientWidth ? 
                selector.scrollLeft + itemWidth : selector.scrollWidth - selector.clientWidth,
            behavior: 'smooth'
        });
    }
}
const toggleShowNavBtn = ()=> {
    if (selector.scrollLeft == 0) {sliderLBtn.style.visibility = "hidden";}
    else if (selector.scrollLeft > 0) {sliderLBtn.style.visibility = "visible";}

    if (selector.scrollLeft == selector.scrollWidth - selector.clientWidth) {sliderRBtn.style.visibility = "hidden";}
    else if (selector.scrollLeft < selector.scrollWidth - selector.clientWidth) {sliderRBtn.style.visibility = "visible";}
}

// Otras funciones
const themeSwitch = ()=> {
    if (themeBtn.dataset.value == "light") {
        themeBtn.dataset.value = "dark";
        themeBtn.childNodes[1].src = "assets/images/icons/light-theme-icon.svg";
        container.setAttribute("style", `--bg-theme: var(--bg-dark-theme); --text-color: var(--text-color-dark-theme); --shadow-color: var(--shadow-dark-color); --player-color-2: var(--player-color-2-dark); --list-2nd-color: var(--list-2nd-dark-color);`);
        logo.setAttribute("src", "assets/images/logo/logo-DynamicMP-full-dark.svg");
        pwWindow.setAttribute("style", `--bg-theme: var(--bg-dark-theme); --text-color: var(--text-color-dark-theme); --shadow-color: var(--shadow-dark-color); --player-color-2: var(--player-color-2-dark);`);
    } else if (themeBtn.dataset.value == "dark") {
        themeBtn.dataset.value = "light";
        themeBtn.childNodes[1].src = "assets/images/icons/dark-theme-icon.svg";
        container.setAttribute("style", `--bg-theme: var(--bg-light-theme); --text-color: var(--text-color-light-theme); --shadow-color: var(--shadow-light-color); --player-color-2: var(--player-color-2-light); --list-2nd-color: var(--list-2nd-light-color);`);
        logo.setAttribute("src", "assets/images/logo/logo-DynamicMP-full-light.svg");
        pwWindow.setAttribute("style", `--bg-theme: var(--bg-light-theme); --text-color: var(--text-color-light-theme); --shadow-color: var(--shadow-light-color); --player-color-2: var(--player-color-2-light);`);
    }
}
const fade = (nodesOut, nodesIn)=> {
    nodesOut.forEach(el=>el.classList.add("fade-out"));
    setTimeout(()=>{
        for (let item of nodesOut) item.classList.replace("fade-out", "d-none");
        for (let item of nodesIn) item.classList.replace("d-none", "fade-in");
    }, 200);
}
const password = "mar23";
const pwMatch = pass => {
    let modal;
    if (pass.toLowerCase() !== password) {
        modal = document.querySelectorAll(".password")[1];
    } else {
        modal = document.querySelectorAll(".password")[2];
        selectPlaylist(undefined,true);
        sessionStorage.setItem("marUnlocked", true);
    }
    modal.classList.replace("d-none", "fade-in-out");
    setTimeout(()=>{
        modal.classList.replace("fade-in-out", "d-none");
        pwWindow.classList.toggle("d-none");
    }, 3000);
    pwWindow.getElementsByTagName("INPUT")[0].value = "";
}

// Eventos
selector.addEventListener("scroll", ()=>{toggleShowNavBtn()});

playBtn.addEventListener("click", ()=>{
    playPauseSong();
});
prevBtn.addEventListener("click", (e)=>{prevNextSong(e)});
nextBtn.addEventListener("click", (e)=>{prevNextSong(e)});
volBtn.addEventListener("click", (e)=>{muteAudioToggle(e)});
volInput.addEventListener("input", ()=>volumeManager());
progress.addEventListener("input", ()=>{seek()});
modeBtn.addEventListener("click", ()=>{playModeToggle()});
backBtn.addEventListener("click", ()=>{goBack()});
hideListBtn.addEventListener("click", ()=>{
    plList.classList.remove("full-height-list");
    toggleList(false);
});

playListBtn.addEventListener("click", ()=>{toggleList()});
randomPLBtn.addEventListener("click", ()=>{
    currentTrack = randomTrack();
    setSong(currentTrack);
    playModeToggle(2);
    playPauseSong();
    toggleList(false);
});

sliderLBtn.addEventListener("click", (e)=>{selectorScroll(e)});
sliderRBtn.addEventListener("click", (e)=>{selectorScroll(e)});

let isDown = false, startX, scrollLeft;
function isTouchEnabled() {
    return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 );
}

if (isTouchEnabled()) {
    selector.addEventListener("touchstart", (e)=>{
        isDown = true;
        startX = e.touches[0].pageX - selector.offsetLeft;
        scrollLeft = selector.scrollLeft;
    }, false);
    selector.addEventListener("touchmove", (e)=>{
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - selector.offsetLeft;
        const move = x - startX;
        selector.scrollLeft = scrollLeft - move;
    }, false);
    selector.addEventListener("touchend", ()=>{
        isDown = false;
        if (window.innerWidth > 425) {
            selector.style.scrollBehavior = "smooth";
            selector.style.scrollSnapType = "x mandatory";
            setTimeout(()=>{selector.removeAttribute("style")}, 500);
        }
    }, false);
} else {
    // selector.addEventListener("mousedown", (e)=>{
    //     isDown = true;
    //     selector.removeAttribute("style");
    //     selector.classList.add("grabbing");
    //     startX = e.pageX - selector.offsetLeft;
    //     scrollLeft = selector.scrollLeft;
    // });
    // selector.addEventListener("mousemove", (e)=>{
    //     if (!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - selector.offsetLeft;
    //     const move = x - startX;
    //     selector.scrollLeft = scrollLeft - move;
    //     if (selector.getAttribute("style") == null) selector.style.scrollSnapType = "unset";
    // });
    // selector.addEventListener("mouseup", ()=>{
    //     isDown = false;
    //     selector.classList.remove("grabbing");
    //     selector.removeAttribute("style");
    //     selector.style.scrollBehavior = "smooth";
    // });
    // selector.addEventListener("mouseleave", ()=>{
    //     isDown = false;
    //     selector.classList.remove("grabbing");
    //     selector.removeAttribute("style");
    //     selector.style.scrollBehavior = "smooth";
    // });
}

themeBtn.addEventListener("click", ()=>{themeSwitch()});
pwWindow.addEventListener("click", (e)=>{
    if (e.target === pwWindow) pwWindow.classList.toggle("d-none");
});
enterPw.addEventListener("click", ()=>{pwMatch(pwWindow.getElementsByTagName("INPUT")[0].value)});

// Inicializacion
createVisualizer();
const barsArr = document.querySelectorAll(".bar");
progress.value = 0;
audioSrc.volume = volInput.value;