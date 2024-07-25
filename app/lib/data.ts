const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Kenny',
      email: 'KungfuKenny@gmail.com',
      password: '123456',
    },
  ];


const customers = [
    {
      "_id": "66a24da7d8943721ae735494",
      "index": 0,
      "guid": "ba8053e1-b635-40da-a966-c969c4c1e301",
      "isActive": true,
      "balance": "$2,019.02",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "name": "Bernard Salazar",
      "username": "Daniel",
      "gender": "male",
      "organization": "MOMENTIA",
      "email": "danielsalazar@momentia.com",
      "phone": "+234 (820) 455-3820",
      "marital": "Single",
      "residence": "Own House",
      "children": "One",
      "status": "Blacklisted",
      "address": "182 Berriman Street, Rote, Mississippi, 1977",
      "joined": "2016-04-08",
      "guarantor": [
        {
          "id": 0,
          "name": "Price Hall",
          "email": "pricehall@momentia.com",
          "phone": "+234 (928) 459-3756",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Aimee Jimenez",
          "email": "aimeejimenez@momentia.com",
          "phone": "+234 (972) 570-2549",
          "relationship": "Brother"
        }
      ]
    },
    {
      "_id": "66a24da7db6482065437b9ef",
      "index": 1,
      "guid": "851be2d2-41b6-4f69-a98e-3e14a5ec4155",
      "isActive": true,
      "balance": "$3,487.17",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "name": "Debora Ortiz",
      "username": "Harding",
      "gender": "male",
      "organization": "XERONK",
      "email": "hardingortiz@xeronk.com",
      "phone": "+234 (849) 519-2277",
      "marital": "Married",
      "residence": "Rented Apartment",
      "children": "None",
      "status": "Blacklisted",
      "address": "336 Regent Place, Coleville, Ohio, 4735",
      "joined": "2017-07-21",
      "guarantor": [
        {
          "id": 0,
          "name": "Cathleen Walsh",
          "email": "cathleenwalsh@xeronk.com",
          "phone": "+234 (815) 525-3486",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Thompson Oneill",
          "email": "thompsononeill@xeronk.com",
          "phone": "+234 (881) 519-3244",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da79836c13cae991924",
      "index": 2,
      "guid": "e08e1533-ac19-49da-a0f1-471bea4244c1",
      "isActive": true,
      "balance": "$2,861.21",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "name": "Evans Hobbs",
      "username": "Kari",
      "gender": "female",
      "organization": "INSOURCE",
      "email": "karihobbs@insource.com",
      "phone": "+234 (935) 472-2857",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "One",
      "status": "Pending",
      "address": "944 Sunnyside Court, Marenisco, Arizona, 6472",
      "joined": "2017-09-09",
      "guarantor": [
        {
          "id": 0,
          "name": "Maddox Page",
          "email": "maddoxpage@insource.com",
          "phone": "+234 (919) 507-3881",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Lizzie Osborn",
          "email": "lizzieosborn@insource.com",
          "phone": "+234 (949) 463-3594",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da797ae3ac2afa6333c",
      "index": 3,
      "guid": "9b51df15-671e-4349-8e6b-7f4569a44179",
      "isActive": true,
      "balance": "$3,830.43",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": "Autumn Leblanc",
      "username": "Kelly",
      "gender": "male",
      "organization": "KAGE",
      "email": "kellyleblanc@kage.com",
      "phone": "+234 (994) 550-2022",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "None",
      "status": "Pending",
      "address": "135 Johnson Street, Emory, New Mexico, 811",
      "joined": "2015-03-24",
      "guarantor": [
        {
          "id": 0,
          "name": "Francis Bullock",
          "email": "francisbullock@kage.com",
          "phone": "+234 (961) 420-2309",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Johnnie Kelly",
          "email": "johnniekelly@kage.com",
          "phone": "+234 (925) 515-3776",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da7896c193c154bd004",
      "index": 4,
      "guid": "16b8bdc5-7574-4d0c-b5dc-2f871419c6ed",
      "isActive": false,
      "balance": "$2,794.61",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "name": "Mcmahon Parrish",
      "username": "York",
      "gender": "male",
      "organization": "DOGNOST",
      "email": "yorkparrish@dognost.com",
      "phone": "+234 (988) 446-2693",
      "marital": "Single",
      "residence": "Own House",
      "children": "Three or More",
      "status": "Blacklisted",
      "address": "423 Bath Avenue, Norfolk, Colorado, 980",
      "joined": "2023-01-02",
      "guarantor": [
        {
          "id": 0,
          "name": "Brewer Dawson",
          "email": "brewerdawson@dognost.com",
          "phone": "+234 (888) 409-3494",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Janis Elliott",
          "email": "janiselliott@dognost.com",
          "phone": "+234 (850) 484-2000",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da70e4806414d2faaaa",
      "index": 5,
      "guid": "6b476629-96b1-4b36-b497-f6212692292a",
      "isActive": true,
      "balance": "$1,140.37",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Poole Mathis",
      "username": "Bishop",
      "gender": "male",
      "organization": "COMSTAR",
      "email": "bishopmathis@comstar.com",
      "phone": "+234 (936) 583-2860",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "One",
      "status": "Active",
      "address": "796 Huron Street, Spokane, District Of Columbia, 6804",
      "joined": "2022-04-09",
      "guarantor": [
        {
          "id": 0,
          "name": "Brady Garza",
          "email": "bradygarza@comstar.com",
          "phone": "+234 (800) 550-2520",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Wendy Guthrie",
          "email": "wendyguthrie@comstar.com",
          "phone": "+234 (867) 555-3533",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da8bf53015bbeb47f45",
      "index": 6,
      "guid": "080eb26d-356d-428a-951d-0c02f124dbaa",
      "isActive": false,
      "balance": "$1,922.40",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "name": "Abigail Mayer",
      "username": "Sonja",
      "gender": "female",
      "organization": "CENTURIA",
      "email": "sonjamayer@centuria.com",
      "phone": "+234 (823) 458-3304",
      "marital": "Married",
      "residence": "Parent House",
      "children": "None",
      "status": "Blacklisted",
      "address": "723 Merit Court, Sterling, Oklahoma, 1042",
      "joined": "2015-11-21",
      "guarantor": [
        {
          "id": 0,
          "name": "Raymond Buck",
          "email": "raymondbuck@centuria.com",
          "phone": "+234 (965) 421-2350",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Juliana Mack",
          "email": "julianamack@centuria.com",
          "phone": "+234 (963) 558-2952",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8f100e4761595654f",
      "index": 7,
      "guid": "89111d4d-d8bc-455e-a814-efbdd834baa2",
      "isActive": true,
      "balance": "$1,084.97",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Elizabeth Soto",
      "username": "Iris",
      "gender": "female",
      "organization": "DYNO",
      "email": "irissoto@dyno.com",
      "phone": "+234 (953) 460-2631",
      "marital": "Single",
      "residence": "Own House",
      "children": "None",
      "status": "Blacklisted",
      "address": "752 Bergen Court, Darrtown, West Virginia, 453",
      "joined": "2019-11-24",
      "guarantor": [
        {
          "id": 0,
          "name": "Owen Merrill",
          "email": "owenmerrill@dyno.com",
          "phone": "+234 (822) 539-2327",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Adriana Rollins",
          "email": "adrianarollins@dyno.com",
          "phone": "+234 (942) 520-2553",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da8268278c27a6faa80",
      "index": 8,
      "guid": "de77b300-405f-4dc2-855a-3058c73dd2df",
      "isActive": true,
      "balance": "$3,662.91",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Emilia Martin",
      "username": "Teri",
      "gender": "female",
      "organization": "HONOTRON",
      "email": "terimartin@honotron.com",
      "phone": "+234 (831) 573-2359",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "One",
      "status": "Pending",
      "address": "554 Burnett Street, Ironton, Massachusetts, 6154",
      "joined": "2021-12-06",
      "guarantor": [
        {
          "id": 0,
          "name": "Chase Vaughan",
          "email": "chasevaughan@honotron.com",
          "phone": "+234 (933) 530-2766",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Lindsay Howard",
          "email": "lindsayhoward@honotron.com",
          "phone": "+234 (803) 420-2490",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da81a2c751d21438221",
      "index": 9,
      "guid": "f6551b42-2b6e-494a-95ff-b0f9230acf2d",
      "isActive": false,
      "balance": "$2,985.93",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "name": "Muriel Hubbard",
      "username": "Holt",
      "gender": "male",
      "organization": "COMTRAIL",
      "email": "holthubbard@comtrail.com",
      "phone": "+234 (915) 434-2450",
      "marital": "Married",
      "residence": "Parent House",
      "children": "One",
      "status": "Pending",
      "address": "481 Tudor Terrace, Shepardsville, American Samoa, 2634",
      "joined": "2015-08-09",
      "guarantor": [
        {
          "id": 0,
          "name": "Patterson Mason",
          "email": "pattersonmason@comtrail.com",
          "phone": "+234 (871) 544-2522",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Pickett Woods",
          "email": "pickettwoods@comtrail.com",
          "phone": "+234 (827) 455-2645",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da804d6db7c8a95313d",
      "index": 10,
      "guid": "d31f2b54-ef35-49be-8d08-7e54cee04713",
      "isActive": true,
      "balance": "$1,493.38",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "name": "Hill Stephenson",
      "username": "Paul",
      "gender": "male",
      "organization": "KYAGORO",
      "email": "paulstephenson@kyagoro.com",
      "phone": "+234 (870) 519-2016",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "One",
      "status": "Blacklisted",
      "address": "651 Madison Place, Catherine, Kansas, 8011",
      "joined": "2024-02-06",
      "guarantor": [
        {
          "id": 0,
          "name": "Benton Eaton",
          "email": "bentoneaton@kyagoro.com",
          "phone": "+234 (884) 565-2014",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Rowena Andrews",
          "email": "rowenaandrews@kyagoro.com",
          "phone": "+234 (862) 514-2338",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8726160a1403f3cbc",
      "index": 11,
      "guid": "3027fa1c-468e-4508-a4af-94a11ee1c478",
      "isActive": false,
      "balance": "$1,953.37",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "name": "Torres Medina",
      "username": "Carney",
      "gender": "male",
      "organization": "GOLISTIC",
      "email": "carneymedina@golistic.com",
      "phone": "+234 (884) 433-3031",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "One",
      "status": "Inactive",
      "address": "619 Stone Avenue, Imperial, Vermont, 6884",
      "joined": "2022-06-14",
      "guarantor": [
        {
          "id": 0,
          "name": "Aurelia Steele",
          "email": "aureliasteele@golistic.com",
          "phone": "+234 (951) 589-3147",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Velasquez Bender",
          "email": "velasquezbender@golistic.com",
          "phone": "+234 (831) 400-3049",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8dea67f95cdabccc9",
      "index": 12,
      "guid": "a978176f-f7e6-4092-811f-6b4f649b02d7",
      "isActive": true,
      "balance": "$3,256.78",
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Elliott Richards",
      "username": "Julia",
      "gender": "female",
      "organization": "ANOCHA",
      "email": "juliarichards@anocha.com",
      "phone": "+234 (818) 400-3667",
      "marital": "Widowed",
      "residence": "Parent House",
      "children": "Three or More",
      "status": "Pending",
      "address": "114 Fillmore Place, Tivoli, Virgin Islands, 3029",
      "joined": "2016-03-21",
      "guarantor": [
        {
          "id": 0,
          "name": "Hughes Puckett",
          "email": "hughespuckett@anocha.com",
          "phone": "+234 (863) 476-3229",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Katy Livingston",
          "email": "katylivingston@anocha.com",
          "phone": "+234 (892) 492-2544",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da890fb72f72d3f7903",
      "index": 13,
      "guid": "b24d1f30-cc0a-4b0f-b0d5-56ff8cf15855",
      "isActive": false,
      "balance": "$3,558.61",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Reba Hoffman",
      "username": "Parker",
      "gender": "male",
      "organization": "UPDAT",
      "email": "parkerhoffman@updat.com",
      "phone": "+234 (864) 532-3581",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "Two",
      "status": "Active",
      "address": "974 Devon Avenue, Advance, Utah, 1021",
      "joined": "2020-02-28",
      "guarantor": [
        {
          "id": 0,
          "name": "Alvarado Pickett",
          "email": "alvaradopickett@updat.com",
          "phone": "+234 (933) 516-3764",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "William Bowers",
          "email": "williambowers@updat.com",
          "phone": "+234 (987) 506-3575",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8987fc554dbf21fc0",
      "index": 14,
      "guid": "4f01650b-5b8f-4f81-8ad6-f88a0422be70",
      "isActive": true,
      "balance": "$2,895.88",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Mcknight Maldonado",
      "username": "Kristy",
      "gender": "female",
      "organization": "HAIRPORT",
      "email": "kristymaldonado@hairport.com",
      "phone": "+234 (843) 500-2181",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "Three or More",
      "status": "Active",
      "address": "367 Turner Place, Dyckesville, Illinois, 9940",
      "joined": "2017-09-01",
      "guarantor": [
        {
          "id": 0,
          "name": "Ernestine Walters",
          "email": "ernestinewalters@hairport.com",
          "phone": "+234 (829) 591-2185",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Peck Graves",
          "email": "peckgraves@hairport.com",
          "phone": "+234 (960) 540-2138",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8d2273ff2da2323af",
      "index": 15,
      "guid": "7460a865-6f76-4915-8aa3-2fc71a812127",
      "isActive": false,
      "balance": "$3,578.65",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Jarvis Noel",
      "username": "Faye",
      "gender": "female",
      "organization": "BEZAL",
      "email": "fayenoel@bezal.com",
      "phone": "+234 (827) 568-2747",
      "marital": "Single",
      "residence": "Own House",
      "children": "One",
      "status": "Active",
      "address": "417 Concord Street, Neahkahnie, Alabama, 3720",
      "joined": "2020-06-06",
      "guarantor": [
        {
          "id": 0,
          "name": "Staci Donaldson",
          "email": "stacidonaldson@bezal.com",
          "phone": "+234 (912) 504-2200",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Leila Schneider",
          "email": "leilaschneider@bezal.com",
          "phone": "+234 (833) 514-2565",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8a8e058d1b2f50314",
      "index": 16,
      "guid": "5ad9589c-2b43-466c-b26f-0e8cd5802e2a",
      "isActive": true,
      "balance": "$3,640.24",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": "Whitehead Oconnor",
      "username": "Adkins",
      "gender": "male",
      "organization": "JAMNATION",
      "email": "adkinsoconnor@jamnation.com",
      "phone": "+234 (998) 419-3052",
      "marital": "Single",
      "residence": "Own House",
      "children": "Three or More",
      "status": "Blacklisted",
      "address": "137 Colby Court, Starks, Northern Mariana Islands, 5011",
      "joined": "2019-09-27",
      "guarantor": [
        {
          "id": 0,
          "name": "Gwendolyn Ward",
          "email": "gwendolynward@jamnation.com",
          "phone": "+234 (951) 475-3209",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "May Morton",
          "email": "maymorton@jamnation.com",
          "phone": "+234 (922) 558-2979",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8c3dcbf0dd93a3ffb",
      "index": 17,
      "guid": "ebc47b59-b3ec-4bba-a562-7dafa5f616ee",
      "isActive": false,
      "balance": "$2,152.11",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Mcdonald Bowen",
      "username": "Kerr",
      "gender": "male",
      "organization": "EARTHPURE",
      "email": "kerrbowen@earthpure.com",
      "phone": "+234 (975) 453-3948",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "Three or More",
      "status": "Active",
      "address": "560 Fuller Place, Chloride, New York, 4390",
      "joined": "2022-02-19",
      "guarantor": [
        {
          "id": 0,
          "name": "Valdez Alexander",
          "email": "valdezalexander@earthpure.com",
          "phone": "+234 (831) 540-3985",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Stacey Mclaughlin",
          "email": "staceymclaughlin@earthpure.com",
          "phone": "+234 (989) 415-3446",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8125e8c3bf991f5da",
      "index": 18,
      "guid": "237af24a-02a7-4d6f-a9f6-46ca56bb0140",
      "isActive": false,
      "balance": "$2,822.19",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "name": "Christine Higgins",
      "username": "Maricela",
      "gender": "female",
      "organization": "NETAGY",
      "email": "maricelahiggins@netagy.com",
      "phone": "+234 (880) 435-2449",
      "marital": "Widowed",
      "residence": "Parent House",
      "children": "Two",
      "status": "Blacklisted",
      "address": "482 Krier Place, Yukon, Maine, 8916",
      "joined": "2018-07-18",
      "guarantor": [
        {
          "id": 0,
          "name": "Moss Dennis",
          "email": "mossdennis@netagy.com",
          "phone": "+234 (859) 540-2253",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Beard Hanson",
          "email": "beardhanson@netagy.com",
          "phone": "+234 (841) 402-3079",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da8c8cf4785de5a2255",
      "index": 19,
      "guid": "bc04138e-ad8e-4cea-9a58-140b4c534a6e",
      "isActive": true,
      "balance": "$3,663.26",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Townsend Allison",
      "username": "Sharron",
      "gender": "female",
      "organization": "POLARIUM",
      "email": "sharronallison@polarium.com",
      "phone": "+234 (905) 548-3871",
      "marital": "Widowed",
      "residence": "Rented Apartment",
      "children": "Three or More",
      "status": "Pending",
      "address": "686 Chauncey Street, Noxen, Nevada, 5670",
      "joined": "2021-01-01",
      "guarantor": [
        {
          "id": 0,
          "name": "Susanne Schmidt",
          "email": "susanneschmidt@polarium.com",
          "phone": "+234 (944) 487-2136",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Harrington Irwin",
          "email": "harringtonirwin@polarium.com",
          "phone": "+234 (804) 598-2823",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8ab9d540ce48bb76c",
      "index": 20,
      "guid": "3fdc7f18-da7d-4ac3-9705-fe60bc0dc274",
      "isActive": true,
      "balance": "$2,286.31",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Lillie Farrell",
      "username": "Alicia",
      "gender": "female",
      "organization": "SOLAREN",
      "email": "aliciafarrell@solaren.com",
      "phone": "+234 (868) 429-3602",
      "marital": "Married",
      "residence": "Parent House",
      "children": "One",
      "status": "Blacklisted",
      "address": "111 Randolph Street, Grahamtown, South Dakota, 940",
      "joined": "2021-05-16",
      "guarantor": [
        {
          "id": 0,
          "name": "Dyer Mooney",
          "email": "dyermooney@solaren.com",
          "phone": "+234 (812) 546-3812",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Millicent Sellers",
          "email": "millicentsellers@solaren.com",
          "phone": "+234 (924) 458-3149",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da8f0b6232a00d33729",
      "index": 21,
      "guid": "bf7165ff-930d-4168-84d4-95e8a302dcdb",
      "isActive": false,
      "balance": "$1,531.85",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Walter James",
      "username": "Byrd",
      "gender": "male",
      "organization": "JIMBIES",
      "email": "byrdjames@jimbies.com",
      "phone": "+234 (917) 512-3735",
      "marital": "Widowed",
      "residence": "Rented Apartment",
      "children": "Three or More",
      "status": "Pending",
      "address": "336 Farragut Place, Faxon, Nebraska, 2945",
      "joined": "2024-07-18",
      "guarantor": [
        {
          "id": 0,
          "name": "Trisha Harvey",
          "email": "trishaharvey@jimbies.com",
          "phone": "+234 (852) 433-2586",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Dianne Tanner",
          "email": "diannetanner@jimbies.com",
          "phone": "+234 (820) 547-2735",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8096b13042db50ffa",
      "index": 22,
      "guid": "c602d436-6182-4c6a-9a50-72120d658aa4",
      "isActive": false,
      "balance": "$1,349.48",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Duran Lawson",
      "username": "Stout",
      "gender": "male",
      "organization": "MAXIMIND",
      "email": "stoutlawson@maximind.com",
      "phone": "+234 (853) 599-3514",
      "marital": "Widowed",
      "residence": "Parent House",
      "children": "One",
      "status": "Pending",
      "address": "400 Kansas Place, Bethany, Virginia, 2427",
      "joined": "2023-12-30",
      "guarantor": [
        {
          "id": 0,
          "name": "Traci Doyle",
          "email": "tracidoyle@maximind.com",
          "phone": "+234 (931) 427-3298",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Forbes Robinson",
          "email": "forbesrobinson@maximind.com",
          "phone": "+234 (832) 439-2971",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8ccc545bdf67742fa",
      "index": 23,
      "guid": "ba6bd6be-6425-4487-bce9-854f09175f16",
      "isActive": false,
      "balance": "$2,358.22",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Alford Hester",
      "username": "Ochoa",
      "gender": "male",
      "organization": "COGNICODE",
      "email": "ochoahester@cognicode.com",
      "phone": "+234 (860) 532-2238",
      "marital": "Married",
      "residence": "Rented Apartment",
      "children": "One",
      "status": "Active",
      "address": "735 Times Placez, Fowlerville, Minnesota, 4039",
      "joined": "2024-03-28",
      "guarantor": [
        {
          "id": 0,
          "name": "Fuentes Dominguez",
          "email": "fuentesdominguez@cognicode.com",
          "phone": "+234 (930) 579-3510",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Leblanc Erickson",
          "email": "leblancerickson@cognicode.com",
          "phone": "+234 (971) 424-2231",
          "relationship": "Brother"
        }
      ]
    },
    {
      "_id": "66a24da80c17dc6298523117",
      "index": 24,
      "guid": "2bec8e1a-2d02-4728-b887-8b3c7e44b4a1",
      "isActive": true,
      "balance": "$3,151.64",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "name": "Goodman Avery",
      "username": "Tamika",
      "gender": "female",
      "organization": "FRANSCENE",
      "email": "tamikaavery@franscene.com",
      "phone": "+234 (907) 573-3478",
      "marital": "Widowed",
      "residence": "Parent House",
      "children": "Three or More",
      "status": "Active",
      "address": "918 Virginia Place, Wright, Florida, 8102",
      "joined": "2016-08-20",
      "guarantor": [
        {
          "id": 0,
          "name": "Stella Emerson",
          "email": "stellaemerson@franscene.com",
          "phone": "+234 (923) 525-2435",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Dominguez Adams",
          "email": "dominguezadams@franscene.com",
          "phone": "+234 (904) 525-2163",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8cc5015f52ca50ade",
      "index": 25,
      "guid": "cbff95c2-ad8e-4b5e-a882-c6546d12d70d",
      "isActive": false,
      "balance": "$1,985.07",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Pugh Ramsey",
      "username": "Albert",
      "gender": "male",
      "organization": "TRANSLINK",
      "email": "albertramsey@translink.com",
      "phone": "+234 (857) 405-3150",
      "marital": "Married",
      "residence": "Parent House",
      "children": "None",
      "status": "Pending",
      "address": "293 Mayfair Drive, Echo, Washington, 2709",
      "joined": "2019-06-24",
      "guarantor": [
        {
          "id": 0,
          "name": "Doyle Lee",
          "email": "doylelee@translink.com",
          "phone": "+234 (999) 530-2795",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Annie Velasquez",
          "email": "annievelasquez@translink.com",
          "phone": "+234 (816) 415-2290",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da868855727378f5825",
      "index": 26,
      "guid": "0cce4261-a547-4717-a9ba-e37d55d9dff0",
      "isActive": true,
      "balance": "$3,332.06",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Hanson Perry",
      "username": "Lamb",
      "gender": "male",
      "organization": "ECRATIC",
      "email": "lambperry@ecratic.com",
      "phone": "+234 (887) 433-2172",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "One",
      "status": "Active",
      "address": "206 Henderson Walk, Wiscon, New Hampshire, 8381",
      "joined": "2020-10-30",
      "guarantor": [
        {
          "id": 0,
          "name": "Cortez Fulton",
          "email": "cortezfulton@ecratic.com",
          "phone": "+234 (968) 442-3941",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Courtney Boone",
          "email": "courtneyboone@ecratic.com",
          "phone": "+234 (824) 550-2316",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8fdb7a81061f445b6",
      "index": 27,
      "guid": "8c9c27d9-96d3-46fe-a4c3-4599612b919e",
      "isActive": true,
      "balance": "$1,090.24",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "name": "Baker Foreman",
      "username": "Maude",
      "gender": "female",
      "organization": "UNI",
      "email": "maudeforeman@uni.com",
      "phone": "+234 (908) 569-3564",
      "marital": "Married",
      "residence": "Parent House",
      "children": "Three or More",
      "status": "Inactive",
      "address": "796 Havens Place, Blanco, Delaware, 530",
      "joined": "2015-03-20",
      "guarantor": [
        {
          "id": 0,
          "name": "Wallace Pruitt",
          "email": "wallacepruitt@uni.com",
          "phone": "+234 (987) 579-3145",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Brooks Skinner",
          "email": "brooksskinner@uni.com",
          "phone": "+234 (825) 468-2093",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da86ab51d59655b92d6",
      "index": 28,
      "guid": "a85976d2-b434-4444-9ddb-a48a9e2640f0",
      "isActive": false,
      "balance": "$2,969.51",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Nita Atkinson",
      "username": "Earline",
      "gender": "female",
      "organization": "AFFLUEX",
      "email": "earlineatkinson@affluex.com",
      "phone": "+234 (980) 477-2178",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "Three or More",
      "status": "Pending",
      "address": "907 Keap Street, Caroleen, Tennessee, 3759",
      "joined": "2021-02-10",
      "guarantor": [
        {
          "id": 0,
          "name": "Whitley Hurley",
          "email": "whitleyhurley@affluex.com",
          "phone": "+234 (963) 522-2757",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Jennie Battle",
          "email": "jenniebattle@affluex.com",
          "phone": "+234 (980) 437-2525",
          "relationship": "Brother"
        }
      ]
    },
    {
      "_id": "66a24da893553d3552c7dfc5",
      "index": 29,
      "guid": "b75ef9b8-0488-471b-ae71-9303393c2923",
      "isActive": false,
      "balance": "$1,060.95",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "name": "Battle Harper",
      "username": "Angela",
      "gender": "female",
      "organization": "CENTREXIN",
      "email": "angelaharper@centrexin.com",
      "phone": "+234 (826) 480-2317",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "One",
      "status": "Active",
      "address": "530 Clermont Avenue, Seymour, Oregon, 9996",
      "joined": "2014-12-05",
      "guarantor": [
        {
          "id": 0,
          "name": "Beach Nolan",
          "email": "beachnolan@centrexin.com",
          "phone": "+234 (837) 406-3287",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Petersen Tyler",
          "email": "petersentyler@centrexin.com",
          "phone": "+234 (998) 499-3654",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8cd7658385f70dc09",
      "index": 30,
      "guid": "8c68cccf-b458-45a8-8b9c-83e73e0aa2a4",
      "isActive": true,
      "balance": "$2,287.93",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "name": "Cooper Benjamin",
      "username": "Dorsey",
      "gender": "male",
      "organization": "INVENTURE",
      "email": "dorseybenjamin@inventure.com",
      "phone": "+234 (860) 513-2265",
      "marital": "Widowed",
      "residence": "Parent House",
      "children": "None",
      "status": "Active",
      "address": "292 Turnbull Avenue, Kapowsin, Missouri, 5983",
      "joined": "2014-03-06",
      "guarantor": [
        {
          "id": 0,
          "name": "Goodwin Hunt",
          "email": "goodwinhunt@inventure.com",
          "phone": "+234 (866) 587-3704",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Delia Trujillo",
          "email": "deliatrujillo@inventure.com",
          "phone": "+234 (956) 506-3198",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8618dd947f1dd6265",
      "index": 31,
      "guid": "2c1b8879-2166-4e46-81b3-7210b762a747",
      "isActive": false,
      "balance": "$2,477.23",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "name": "Lou Sharpe",
      "username": "Juarez",
      "gender": "male",
      "organization": "COFINE",
      "email": "juarezsharpe@cofine.com",
      "phone": "+234 (972) 553-2983",
      "marital": "Married",
      "residence": "Own House",
      "children": "Three or More",
      "status": "Pending",
      "address": "724 Boynton Place, Eureka, South Carolina, 4123",
      "joined": "2024-03-25",
      "guarantor": [
        {
          "id": 0,
          "name": "Valenzuela Hess",
          "email": "valenzuelahess@cofine.com",
          "phone": "+234 (926) 403-2183",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Bradley Maxwell",
          "email": "bradleymaxwell@cofine.com",
          "phone": "+234 (889) 517-2223",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8f3729b6add4f6fe2",
      "index": 32,
      "guid": "d878e03c-11cc-4e3d-a951-02870e4bbbaf",
      "isActive": true,
      "balance": "$1,420.85",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "name": "Talley York",
      "username": "Daphne",
      "gender": "female",
      "organization": "NEXGENE",
      "email": "daphneyork@nexgene.com",
      "phone": "+234 (965) 589-2646",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "One",
      "status": "Pending",
      "address": "685 Stockholm Street, Hiko, New Jersey, 8982",
      "joined": "2016-10-29",
      "guarantor": [
        {
          "id": 0,
          "name": "Berry Spears",
          "email": "berryspears@nexgene.com",
          "phone": "+234 (966) 477-3524",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Daugherty Raymond",
          "email": "daughertyraymond@nexgene.com",
          "phone": "+234 (809) 401-2887",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8b13ae6534674644e",
      "index": 33,
      "guid": "038006e1-9ac5-41e6-a7d0-bc7aa7a93565",
      "isActive": true,
      "balance": "$3,346.66",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Reilly Oliver",
      "username": "Carla",
      "gender": "female",
      "organization": "PAWNAGRA",
      "email": "carlaoliver@pawnagra.com",
      "phone": "+234 (835) 576-3033",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "One",
      "status": "Inactive",
      "address": "410 Gardner Avenue, Deltaville, North Carolina, 7537",
      "joined": "2015-06-12",
      "guarantor": [
        {
          "id": 0,
          "name": "Flowers Diaz",
          "email": "flowersdiaz@pawnagra.com",
          "phone": "+234 (823) 408-3814",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Paula Duran",
          "email": "pauladuran@pawnagra.com",
          "phone": "+234 (812) 591-3818",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8483e5afb503beece",
      "index": 34,
      "guid": "145700a1-162e-4cd3-a8cc-c2a9eea89070",
      "isActive": false,
      "balance": "$3,400.72",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Nanette George",
      "username": "Ryan",
      "gender": "male",
      "organization": "ULTRASURE",
      "email": "ryangeorge@ultrasure.com",
      "phone": "+234 (975) 593-3327",
      "marital": "Married",
      "residence": "Parent House",
      "children": "Three or More",
      "status": "Blacklisted",
      "address": "322 Forbell Street, Breinigsville, Georgia, 8676",
      "joined": "2016-07-05",
      "guarantor": [
        {
          "id": 0,
          "name": "Baird Santiago",
          "email": "bairdsantiago@ultrasure.com",
          "phone": "+234 (985) 450-3415",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Melendez Cantrell",
          "email": "melendezcantrell@ultrasure.com",
          "phone": "+234 (812) 451-2523",
          "relationship": "Brother"
        }
      ]
    },
    {
      "_id": "66a24da8e2029c7fa44bea42",
      "index": 35,
      "guid": "ed0707cc-d52c-49e2-911d-c3a7c37e7806",
      "isActive": true,
      "balance": "$1,970.20",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Tammi Carson",
      "username": "Corine",
      "gender": "female",
      "organization": "FLYBOYZ",
      "email": "corinecarson@flyboyz.com",
      "phone": "+234 (934) 579-3664",
      "marital": "Single",
      "residence": "Rented Apartment",
      "children": "Two",
      "status": "Inactive",
      "address": "453 Tampa Court, Epworth, Texas, 662",
      "joined": "2015-10-31",
      "guarantor": [
        {
          "id": 0,
          "name": "Francisca Burks",
          "email": "franciscaburks@flyboyz.com",
          "phone": "+234 (819) 412-2335",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Samantha Dodson",
          "email": "samanthadodson@flyboyz.com",
          "phone": "+234 (819) 469-3941",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da82d829f76a6b1c2fa",
      "index": 36,
      "guid": "f42d953d-eee6-40eb-a75e-5f5162073a76",
      "isActive": false,
      "balance": "$3,779.40",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": "Phyllis Pratt",
      "username": "Campbell",
      "gender": "male",
      "organization": "AMTAS",
      "email": "campbellpratt@amtas.com",
      "phone": "+234 (972) 535-2187",
      "marital": "Married",
      "residence": "Rented Apartment",
      "children": "None",
      "status": "Pending",
      "address": "382 Kensington Walk, Belmont, Wisconsin, 9442",
      "joined": "2022-07-30",
      "guarantor": [
        {
          "id": 0,
          "name": "Rebecca Massey",
          "email": "rebeccamassey@amtas.com",
          "phone": "+234 (983) 489-2020",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Miles Berry",
          "email": "milesberry@amtas.com",
          "phone": "+234 (810) 577-2616",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da8584a4a5ef1054970",
      "index": 37,
      "guid": "90e69e29-b276-4004-87b2-1ed35312ef57",
      "isActive": false,
      "balance": "$1,990.99",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Morgan Mcmillan",
      "username": "Selena",
      "gender": "female",
      "organization": "STEELTAB",
      "email": "selenamcmillan@steeltab.com",
      "phone": "+234 (832) 427-2600",
      "marital": "Married",
      "residence": "Rented Apartment",
      "children": "Two",
      "status": "Active",
      "address": "723 Brighton Court, Stagecoach, Arkansas, 3482",
      "joined": "2022-08-31",
      "guarantor": [
        {
          "id": 0,
          "name": "Stark Turner",
          "email": "starkturner@steeltab.com",
          "phone": "+234 (884) 410-3022",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Craft Waters",
          "email": "craftwaters@steeltab.com",
          "phone": "+234 (803) 464-2862",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8d7aa2da66cef640c",
      "index": 38,
      "guid": "d4ea0708-84d2-416e-a4c3-7cf2aa121307",
      "isActive": true,
      "balance": "$1,287.18",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Kaufman Conrad",
      "username": "Shelia",
      "gender": "female",
      "organization": "BRAINQUIL",
      "email": "sheliaconrad@brainquil.com",
      "phone": "+234 (992) 514-3147",
      "marital": "Single",
      "residence": "Own House",
      "children": "Three or More",
      "status": "Inactive",
      "address": "538 Vine Street, Eggertsville, Marshall Islands, 9427",
      "joined": "2019-02-25",
      "guarantor": [
        {
          "id": 0,
          "name": "Weaver Anthony",
          "email": "weaveranthony@brainquil.com",
          "phone": "+234 (835) 443-3527",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Erma Cross",
          "email": "ermacross@brainquil.com",
          "phone": "+234 (863) 446-3211",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8865b9ad2aa506af9",
      "index": 39,
      "guid": "195358d5-1e3c-4310-8758-9f01557b4c1c",
      "isActive": true,
      "balance": "$2,385.35",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "name": "Richmond Cooley",
      "username": "Edith",
      "gender": "female",
      "organization": "QNEKT",
      "email": "edithcooley@qnekt.com",
      "phone": "+234 (992) 484-3825",
      "marital": "Married",
      "residence": "Parent House",
      "children": "None",
      "status": "Active",
      "address": "555 Moore Place, Zeba, Indiana, 4733",
      "joined": "2024-05-31",
      "guarantor": [
        {
          "id": 0,
          "name": "Jacqueline Bonner",
          "email": "jacquelinebonner@qnekt.com",
          "phone": "+234 (977) 578-2226",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Sanchez Day",
          "email": "sanchezday@qnekt.com",
          "phone": "+234 (941) 447-3763",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8a859726aee9f7b58",
      "index": 40,
      "guid": "4c8f2605-b890-4907-97c6-f5f9fb9e9b23",
      "isActive": true,
      "balance": "$1,822.65",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Ava Patrick",
      "username": "Skinner",
      "gender": "male",
      "organization": "IDETICA",
      "email": "skinnerpatrick@idetica.com",
      "phone": "+234 (864) 537-2838",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "One",
      "status": "Active",
      "address": "403 Battery Avenue, Camas, California, 5243",
      "joined": "2016-11-04",
      "guarantor": [
        {
          "id": 0,
          "name": "Chandra Phelps",
          "email": "chandraphelps@idetica.com",
          "phone": "+234 (830) 527-3022",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Bray Frost",
          "email": "brayfrost@idetica.com",
          "phone": "+234 (874) 459-3971",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da83cb835915568ff01",
      "index": 41,
      "guid": "687e3633-fcdc-497f-940f-abb47cacfaf1",
      "isActive": false,
      "balance": "$3,293.71",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Caroline Lucas",
      "username": "Laverne",
      "gender": "female",
      "organization": "ZOINAGE",
      "email": "lavernelucas@zoinage.com",
      "phone": "+234 (982) 553-3792",
      "marital": "Married",
      "residence": "Rented Apartment",
      "children": "None",
      "status": "Inactive",
      "address": "957 Erasmus Street, Sharon, Puerto Rico, 4236",
      "joined": "2014-12-28",
      "guarantor": [
        {
          "id": 0,
          "name": "Hannah Mcdowell",
          "email": "hannahmcdowell@zoinage.com",
          "phone": "+234 (922) 585-2127",
          "relationship": "Brother"
        },
        {
          "id": 1,
          "name": "Mccarty Klein",
          "email": "mccartyklein@zoinage.com",
          "phone": "+234 (882) 401-3301",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da8b9847506ef730b2b",
      "index": 42,
      "guid": "41be5797-1fbd-4f7a-9b98-4c9572795f52",
      "isActive": false,
      "balance": "$3,316.29",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Powers Cameron",
      "username": "Amanda",
      "gender": "female",
      "organization": "METROZ",
      "email": "amandacameron@metroz.com",
      "phone": "+234 (974) 521-3139",
      "marital": "Single",
      "residence": "Own House",
      "children": "None",
      "status": "Blacklisted",
      "address": "554 Kay Court, Courtland, Michigan, 6558",
      "joined": "2023-07-24",
      "guarantor": [
        {
          "id": 0,
          "name": "Terry Levy",
          "email": "terrylevy@metroz.com",
          "phone": "+234 (899) 594-3478",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Bobbi Curry",
          "email": "bobbicurry@metroz.com",
          "phone": "+234 (963) 581-3865",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da89490cc43ebd03f5b",
      "index": 43,
      "guid": "19a00602-12dc-4fd7-bdb3-13f778ebb75a",
      "isActive": false,
      "balance": "$1,710.12",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "name": "Patrick Hartman",
      "username": "Floyd",
      "gender": "male",
      "organization": "IMAGINART",
      "email": "floydhartman@imaginart.com",
      "phone": "+234 (900) 573-2086",
      "marital": "Single",
      "residence": "Parent House",
      "children": "One",
      "status": "Inactive",
      "address": "344 Morgan Avenue, Bloomington, Pennsylvania, 749",
      "joined": "2021-07-26",
      "guarantor": [
        {
          "id": 0,
          "name": "Maria Dale",
          "email": "mariadale@imaginart.com",
          "phone": "+234 (955) 492-3178",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Galloway Herring",
          "email": "gallowayherring@imaginart.com",
          "phone": "+234 (985) 538-3863",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8cacf2681208035d3",
      "index": 44,
      "guid": "99167408-3540-4c04-ab2b-82a09c4bf706",
      "isActive": true,
      "balance": "$2,900.12",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "name": "Roberta Cote",
      "username": "Billie",
      "gender": "female",
      "organization": "DUOFLEX",
      "email": "billiecote@duoflex.com",
      "phone": "+234 (940) 407-2905",
      "marital": "Widowed",
      "residence": "Own House",
      "children": "Two",
      "status": "Active",
      "address": "330 John Street, Wilmington, Iowa, 6169",
      "joined": "2017-07-11",
      "guarantor": [
        {
          "id": 0,
          "name": "David Douglas",
          "email": "daviddouglas@duoflex.com",
          "phone": "+234 (804) 568-3053",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Adrienne Terrell",
          "email": "adrienneterrell@duoflex.com",
          "phone": "+234 (907) 502-2883",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8c1baff7de4382ae5",
      "index": 45,
      "guid": "7947f18b-906b-4bf4-8de9-3a38b09024ab",
      "isActive": false,
      "balance": "$1,025.96",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Valeria Waller",
      "username": "Bush",
      "gender": "male",
      "organization": "ORBIXTAR",
      "email": "bushwaller@orbixtar.com",
      "phone": "+234 (933) 497-3535",
      "marital": "Single",
      "residence": "Parent House",
      "children": "One",
      "status": "Active",
      "address": "535 Eaton Court, Hartsville/Hartley, Montana, 2001",
      "joined": "2018-07-20",
      "guarantor": [
        {
          "id": 0,
          "name": "Santos Tate",
          "email": "santostate@orbixtar.com",
          "phone": "+234 (806) 530-3728",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Ellen Cline",
          "email": "ellencline@orbixtar.com",
          "phone": "+234 (982) 413-2373",
          "relationship": "Brother"
        }
      ]
    },
    {
      "_id": "66a24da88d77e42e77388b0d",
      "index": 46,
      "guid": "312c3e3b-5307-4682-8e72-d5366443203a",
      "isActive": false,
      "balance": "$3,842.42",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "name": "Dodson Barton",
      "username": "Noble",
      "gender": "male",
      "organization": "FANGOLD",
      "email": "noblebarton@fangold.com",
      "phone": "+234 (982) 425-3266",
      "marital": "Widowed",
      "residence": "Parent House",
      "children": "Three or More",
      "status": "Blacklisted",
      "address": "686 Hewes Street, Sanford, Louisiana, 6294",
      "joined": "2023-01-11",
      "guarantor": [
        {
          "id": 0,
          "name": "Molly Barlow",
          "email": "mollybarlow@fangold.com",
          "phone": "+234 (803) 591-3299",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Patrice Johns",
          "email": "patricejohns@fangold.com",
          "phone": "+234 (959) 402-3781",
          "relationship": "Friend"
        }
      ]
    },
    {
      "_id": "66a24da8488fb493f76ffe07",
      "index": 47,
      "guid": "194d5092-dcab-4bbb-8b2b-613aa44d41e7",
      "isActive": false,
      "balance": "$3,748.60",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Adrian Cooper",
      "username": "Evelyn",
      "gender": "female",
      "organization": "NIPAZ",
      "email": "evelyncooper@nipaz.com",
      "phone": "+234 (834) 501-2786",
      "marital": "Married",
      "residence": "Parent House",
      "children": "None",
      "status": "Active",
      "address": "660 Benson Avenue, Topanga, Rhode Island, 6131",
      "joined": "2024-03-14",
      "guarantor": [
        {
          "id": 0,
          "name": "Blackburn William",
          "email": "blackburnwilliam@nipaz.com",
          "phone": "+234 (922) 429-2256",
          "relationship": "Parent"
        },
        {
          "id": 1,
          "name": "Chrystal Rose",
          "email": "chrystalrose@nipaz.com",
          "phone": "+234 (900) 566-3102",
          "relationship": "Parent"
        }
      ]
    },
    {
      "_id": "66a24da804d7e64d2bf1b463",
      "index": 48,
      "guid": "dfd2b303-6d30-4072-9dcc-941c1a0ecef1",
      "isActive": false,
      "balance": "$1,326.40",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "name": "Karina Avila",
      "username": "Dona",
      "gender": "female",
      "organization": "PLAYCE",
      "email": "donaavila@playce.com",
      "phone": "+234 (802) 451-2442",
      "marital": "Widowed",
      "residence": "Parent House",
      "children": "Three or More",
      "status": "Inactive",
      "address": "177 Cadman Plaza, Roderfield, Federated States Of Micronesia, 9219",
      "joined": "2022-04-26",
      "guarantor": [
        {
          "id": 0,
          "name": "Rosie Holcomb",
          "email": "rosieholcomb@playce.com",
          "phone": "+234 (924) 436-2822",
          "relationship": "Friend"
        },
        {
          "id": 1,
          "name": "Lucille Roberson",
          "email": "lucilleroberson@playce.com",
          "phone": "+234 (986) 457-2908",
          "relationship": "Sister"
        }
      ]
    },
    {
      "_id": "66a24da8c26f0cffce4b947f",
      "index": 49,
      "guid": "0f8a86ff-a004-412d-a863-c4145089a5ef",
      "isActive": true,
      "balance": "$3,627.53",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "name": "Ericka Burke",
      "username": "Deena",
      "gender": "female",
      "organization": "MEDESIGN",
      "email": "deenaburke@medesign.com",
      "phone": "+234 (906) 452-2857",
      "marital": "Single",
      "residence": "Own House",
      "children": "Two",
      "status": "Inactive",
      "address": "298 Bradford Street, Vandiver, Connecticut, 4926",
      "joined": "2020-01-12",
      "guarantor": [
        {
          "id": 0,
          "name": "Hendricks Estes",
          "email": "hendricksestes@medesign.com",
          "phone": "+234 (999) 463-2538",
          "relationship": "Sister"
        },
        {
          "id": 1,
          "name": "Jolene Pate",
          "email": "jolenepate@medesign.com",
          "phone": "+234 (915) 439-3792",
          "relationship": "Brother"
        }
      ]
    }
  ]


  export {customers, users}