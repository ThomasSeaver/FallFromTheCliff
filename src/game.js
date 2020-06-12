var config = {
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene: [Loader, SceneCard, Conversation, Location]
}

var game = new Phaser.Game(config)

function loadScene(newScene, newScenePos, sceneObj) {
    ll.newScenePos = newScenePos
    if (newScene == "Beach") {
        ll.sceneBG     = "BeachBG"
        ll.entities    = gs.beach.entities
        ll.vertices    = gs.beach.vertices
    } else if (newScene == "Cliff") {
        ll.sceneBG     = "CliffBG"
        ll.entities    = gs.cliff.entities
        ll.vertices    = gs.cliff.vertices
    } else if (newScene == "River") {
        ll.sceneBG     = "RiverBG"
        ll.entities    = gs.river.entities
        ll.vertices    = gs.river.vertices
    } else if (newScene == "Camp") {
        ll.sceneBG     = "CampBG"
        ll.entities    = gs.camp.entities
        ll.vertices    = gs.camp.vertices
    } else if (newScene == "Exit") {
        ll.sceneBG     = "ExitBG"
        ll.entities    = gs.exit.entities
        ll.vertices    = gs.exit.vertices
    }
    sceneObj.scene.start('Location')
}

// GAMESTATE VARIABLE gs
const gs = {
    width:   config.width,
    height:  config.height,
    centerX: config.width / 2,
    centerY: config.height / 2,
    beach:   {
        sceneBG:  "",
        vertices: [
			{x: 484, y: 315},
			{x: 439, y: 408},
			{x: 439, y: 495},
			{x: 469, y: 567},
			{x: 568, y: 636},
			{x: 712, y: 657},
			{x: 1006, y: 546},
			{x: 1147, y: 546},
			{x: 1280, y: 576, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 50, y: 600}},
			{x: 1280, y: 324, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 50, y: 600}},
			{x: 937, y: 285},
			{x: 730, y: 285},
			{x: 604, y: 309}
		],
        entities: [
			{
				name: "Katie",
				x: 550,
				y: 550,
				talkedTo: false,
				dialogues: [{
					speakers: ["Katie", "Purroit"],
					messages: [
						{
							speaker: "Katie",
							side: "left",
							text: "I can't believe one of us would do this!"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "I'm sorry for your loss, ma'am."
						},
						{
							speaker: "Katie",
							side: "left",
							text: "It just all seems so pointless now."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "We can still figure out who did this. Do you mind if I ask you a few questions?"
						},
						{
							speaker: "Katie",
							side: "left",
							text: "Oh, s-sure."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Were you the one who found the body?"
						},
						{
							speaker: "Katie",
							side: "left",
							text: "Yeah... Everyone was getting ready to go swimming, so I came looking for Jake. He said he wanted to check out the cliff, and I thought I could yell up to him, b-but he..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "I understand. Can you give me a timeline of what happened next?"
						},
						{
							speaker: "Katie",
							side: "left",
							text: "Um, y-yes. I came screaming back, to camp, and that was when I saw Tara's bloody swim suit as she pulled it out. I freaked out even more and called you guys before I told anyone."
						},
						{
							speaker: "Katie",
							side: "left",
							text: "I just wanted us to go swimming, a-and now this..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "It's okay. I'm going to go talk to your other friends now, but let me know if you think of anything."
						},
						{
							speaker: "Katie",
							side: "left",
							text: "Thank you officer..."
						}
					]
				}, 
				{
					speakers: ["Katie", "Purroit"],
					messages: [
						{
							speaker: "Purroit",
							side: "right",
							text: "Excuse me, miss? We've come across a handkerchief monogrammed G.K. soaked in blood. Seems to be evidence. Do you happen to know anyone with those initials?"
						},
						{
							speaker: "Katie",
							side: "left",
							text: "George's last name is King, but he couldn't've done this! He and Moe were out getting supplies!"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "We know that, you all backed their alibis up pretty strongly when we arrived. Do you happen to know anyone else?"
						},
						{
							speaker: "Katie",
							side: "left",
							text: "Um... No one on this trip... I suppose the only other person I know is Alex's boyfriend, Gerald Kant."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Her boyfriend's name is Gerald Kant? You're sure of that?"
						},
						{
							speaker: "Katie",
							side: "left",
							text: "Yes, absolutely. But he's back home, there's no way he's involved."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Hmm. Thanks, you've been very helpful."
						},
					]
				}]
			}
		]
    },
    cliff:   {
        sceneBG:  "",
        vertices: [
			{x: 838, y: 0, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 868, y: 114}},
			{x: 1273, y: 0, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 868, y: 114}},
			{x: 1201, y: 510},
			{x: 1021, y: 645},
			{x: 1018, y: 645},
			{x: 877, y: 621},
			{x: 718, y: 660},
			{x: 634, y: 672},
			{x: 598, y: 612},
			{x: 649, y: 552},
			{x: 568, y: 456},
			{x: 502, y: 360},
			{x: 502, y: 264},
			{x: 598, y: 210},
			{x: 736, y: 183},
			{x: 823, y: 105},
			{x: 844, y: 42}
		],
        entities: [
			{
				name: "George",
				x: 720,
				y: 590,
				talkedTo: false,
				dialogues: [{
					speakers: ["George", "Purroit"],
					messages: [
						{
							speaker: "Purroit",
							side: "right",
							text: "What are you doing up here?"
						},
						{
							speaker: "George",
							side: "left",
							text: "Just trying to be helpful. I know it can't be me, and I need to know which one of us could have done this."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Oh. You found anything, or you just covering up evidence?"
						},
						{
							speaker: "George",
							side: "left",
							text: "All I've found is this monogrammed handkerchief..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Hmm. G.K... and soaked in blood."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Know anyone with the initials G.K.?"
						},
						{
							speaker: "George",
							side: "left",
							text: "Um. I'm George Knight. But I couldn't have done it, I was at the store with Moe!"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Alright. I'll take this for evidence. If you didn't have alibis everyone agreed with, this would be much more suspicious. Be careful during murder investigations, son."
						},
					]
				}]
			}
		]
    },
    river:   {
        sceneBG:  "",
        vertices: [
			{x: 0, y: 717, gatewayVertex: true, gatewayScene: "Beach", afterPos: {x: 1230, y: 430}},
			{x: 0, y: 426, gatewayVertex: true, gatewayScene: "Beach", afterPos: {x: 1230, y: 430}},
			{x: 166, y: 375},
			{x: 433, y: 375},
			{x: 709, y: 429}, 
			{x: 808, y: 420},
			{x: 1000, y: 312},
			{x: 1102, y: 267},
			{x: 1280, y: 258, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 82, y: 585}}, 
			{x: 1280, y: 714, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 82, y: 585}}
		],
        entities: [
			{
				name: "Alex",
				x: 450,
				y: 500,
				talkedTo: false,
				dialogues: [{
					speakers: ["Alex", "Purroit"],
					messages: [
						{
							speaker: "Alex",
							side: "left",
							text: "I didn't think any of us were capable of this."
						},
						{
							speaker: "Alex",
							side: "left",
							text: "But I can't see anyway this happened besides Tara doing it..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "I'm detective Purroit, can I ask your name, ma'am?"
						},
						{
							speaker: "Alex",
							side: "left",
							text: "Oh sure, I'm Alex."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Alright Alex. What makes you so sure Tara did it? You seem awful hasty to accuse a friend."
						},
						{
							speaker: "Alex",
							side: "left",
							text: "Believe me, I don't want to! But between the suit, and the knife..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "I do understand that her swimsuit has been taken into evidence due to its blood stains, but how is she connected to the knife we found at the scene?"
						},
						{
							speaker: "Alex",
							side: "left",
							text: "We needed it for lunch, but she claimed it went missing while we were cooking. I couldn't find it, and then all of a sudden it appears next to Jake?"
						},
						{
							speaker: "Alex",
							side: "left",
							text: "I just can't see it any other way."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "I'll take that into consideration. Thanks for your assistance."
						},
					]
				}, 
				{
					speakers: ["Alex", "Purroit"],
					messages: [
						{
							speaker: "Alex",
							side: "left",
							text: "Excuse me, detective. Has anything come up?"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Not much yet, just taking interviews. Only think we've found so far is this bloody handkerchief monogrammed G.K.. Do you know anyone with those initials?"
						},
						{
							speaker: "Alex",
							side: "left",
							text: "Oh, just George. I definitely can't think of anyone else I know besides George with those initials."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Well, lucky for him he has a pretty solid alibi your friends backed up when we got here. Seems that he's safe for now."
						},
						{
							speaker: "Alex",
							side: "left",
							text: "Let me know if anything else comes up! I really hope it's not Tara..."
						},
					]
				}]
			}
		]
    },
    camp:   {
        sceneBG:  "",
        vertices: [
			{x: 166, y: 633},
			{x: 0, y: 633, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 1220, y: 570}},
			{x: 0, y: 489, gatewayVertex: true, gatewayScene: "River", afterPos: {x: 1220, y: 570}},
			{x: 268, y: 405},
			{x: 343, y: 237},
			{x: 487, y: 114},
			{x: 688, y: 114},
			{x: 835, y: 0, gatewayVertex: true, gatewayScene: "Cliff", afterPos: {x: 1045, y: 111}},
			{x: 1015, y: 0, gatewayVertex: true, gatewayScene: "Cliff", afterPos: {x: 1045, y: 111}}, 
			{x: 946, y: 141},
			{x: 958, y: 255},
			{x: 1192, y: 405},
			{x: 1280, y: 405, gatewayVertex: true, gatewayScene: "Exit", afterPos: {x: 49, y: 381}}, 
			{x: 1280, y: 612, gatewayVertex: true, gatewayScene: "Exit", afterPos: {x: 49, y: 381}}, //1210 537
			{x: 1003, y: 573},
			{x: 871, y: 543},
			{x: 661, y: 543},
			{x: 463, y: 600},
			{x: 361, y: 633}
		],
        entities: [
			{
				name: "Tara",
				x: 376,
				y: 321,
				talkedTo: false,
				dialogues: [{
					speakers: ["Tara", "Purroit"],
					messages: [
						{
							speaker: "Tara",
							side: "left",
							text: "I don't understand what's happening..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "It's okay. Just break it down for me, and I'll help you as best I can."
						},
						{
							speaker: "Tara",
							side: "left",
							text: "As soon as Jake was found, I was also pulling out my swimsuit, wh-which is...."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Covered in blood. It's okay. Please, just tell me what happened next."
						},
						{
							speaker: "Tara",
							side: "left",
							text: "Katie was freaking out and calling the cops. I'm just glad you guys came as fast as you did... Alex started talking about how the knife went missing, and now my suit was covered in his blood, and everyone was looking at me... "
						},
						{
							speaker: "Tara",
							side: "left",
							text: "It was like they all thought I had killed him. I LOVED Jake, I could never have done that..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Just focus on the now. You're safe until it's been proven, and I consider all of you equal suspects for now."
						},
						{
							speaker: "Tara",
							side: "left",
							text: "I'm not sure, that makes me feel any better..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "I'll be back, so if you think of anything make sure to bring it up."
						},
					]
				},
				{
					speakers: ["Tara", "Purroit"],
					messages: [
						{
							speaker: "Purroit",
							side: "right",
							text: "Do you have any enemies, Tara?"
						},
						{
							speaker: "Tara",
							side: "left",
							text: "Enemies? I don't think so... Me and Alex got in a bit of a fight over asking Jake out, but since we started planning the trip, she's been so much nicer to be around!"
						},
						{
							speaker: "Tara",
							side: "Left",
							text: "I was gonna ask him out later today... It's so unfair..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Any loss of life is wrong. Regardless, this one definitely seems suspicious. Between the swim suit and the knife, I would say you were the prime suspect, except..."
						},
						{
							speaker: "Tara",
							side: "left",
							text: "Except what??"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Your finger prints are on the knife, but there's no blood. Clearly not the murder weapon, yet thrown with the body in an attempt to make it look like the murder weapon."
						},
						{
							speaker: "Tara",
							side: "left",
							text: "What does this mean?"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Unless you're particularly stupid, or insanely brilliant, it's not you. Remain here, I expect to have this solved shortly."
						},
					]
				}]
			},
			{
				name: "Moe",
				x: 970,
				y: 300,
				talkedTo: false,
				dialogues: [{
					speakers: ["Moe", "Purroit"],
					messages: [
						{
							speaker: "Moe",
							side: "left",
							text: "Completely insane..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "It always is. Any insight on what happened?"
						},
						{
							speaker: "Moe",
							side: "left",
							text: "Not really... I've been busy all day. I put up tents with Alex when we got here, then me and George went to the store to get food. We had barely come back when Katie came tearing into camp, and told us what had happened to Jake..."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "So you and George were gone when Jake was presumably murdered?"
						},
						{
							speaker: "Moe",
							side: "left",
							text: "Jake almost came with us to the store, but George was already going so he decided to try to get reception up on the cliffs and watch the waves. We were still unloading stuff when it all went to hell."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Alright. Anything strange happen prior to this?"
						},
						{
							speaker: "Tara",
							side: "left",
							text: "The only thing I can think of is that we were short a stake for setting up the tents. I always bring the exact number, but I must have miscounted or something at home because after Alex pulled them out we were missing one."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Hmmm. Okay, I'll be back."
						},
					]
				}]
			}
		]
    },
    exit:   {
        sceneBG:  "",
        vertices: [
			{x: 0, y: 417, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 1210, y: 537}}, 
			{x: 0, y: 225, gatewayVertex: true, gatewayScene: "Camp", afterPos: {x: 1210, y: 537}}, 
			{x: 322, y: 273},
			{x: 532, y: 336},
			{x: 808, y: 336},
			{x: 1006, y: 288},
			{x: 1162, y: 249},
			{x: 1240, y: 240},
			{x: 1225, y: 468},
			{x: 1099, y: 489},
			{x: 1096, y: 489},
			{x: 799, y: 513},
			{x: 517, y: 465},
			{x: 280, y: 432},
			{x: 85, y: 417}
		],
        entities: [
			{
				name: "Cop",
				x: 1175,
				y: 435,
				talkedTo: false,
				dialogues: [{
					speakers: ["Cop", "Purroit"],
					messages: [
						{
							speaker: "Cop",
							side: "left",
							text: "You solved it yet Purroit?"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Nah. Did talk to some of them though. Its an interesting case. Anything come back on that knife?"
						},
						{
							speaker: "Cop",
							side: "left",
							text: "Are you sure you gave me the right knife? I went all over it with the bloodometer and it didn't detect anything. Just the fingerprints of one Tara Diskin."
						},
						{
							speaker: "Cop",
							side: "left",
							text: "Oh, and the swimsuit is definitely covered in blood. Jake McCoy's, to be exact."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "That's definitely the knife... Guess I need to do some more investigating. I'll be back, Mr. Officer."
						},
						{
							speaker: "Cop",
							side: "left",
							text: "Please, call me John. Mr.Officer was my father."
						},
					]
				},
				{
					speakers: ["Cop", "Purroit"],
					messages: [
						{
							speaker: "Purroit",
							side: "right",
							text: "Say John, mind giving this a spin in the bloodometer for me?"
						},
						{
							speaker: "Cop",
							side: "left",
							text: "Sure buddy."
						},
						{
							speaker: "Cop",
							side: "left",
							text: "Well, this is definitely more of Jake's blood. Absolutely soaked too; if I had to guess someone tried to clean something off with this before realizing how futile that would be."
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Interesting. I'll be back when I know who it is."
						},
						{
							speaker: "Cop",
							side: "left",
							text: "Best damn detective we got."
						}
					]
				},
				{
					speakers: ["Cop", "Purroit"],
					messages: [
						{
							speaker: "Cop",
							side: "left",
							text: "You solved it yet buddy?"
						},
						{
							speaker: "Purroit",
							side: "right",
							text: "Maybe."
						},
						{
							speaker: "Cop",
							side: "left",
							text: "Well, who do you think it is?"
						},
						{
							decisionButton: true
						},
					]
				}]
			}
		]
	},
	dialogues: {
		first: {
			speakers: ["Purroit", "Jake"],
			messages: [
				{
					speaker: "Purroit",
					side: "left",
					text: "Alright buddy, come on back."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "You listening?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Yessss, there he is."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "Wh... Where am I?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "The beach! Though I doubt you expected to reach it this way."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "It appears that whoever did this may have also subjected you to a stabbing, though that part remains somewhat less clear."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "..."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "I have to let you figure it out. Sometimes your type doesn't believe me."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "...Am I dead?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Ding ding ding! I'm afraid you've crossed the eternal barrier, my friend."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "What happened?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "To the naked eye you seem to have been stabbed and pushed off of a cliff."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "Who would stab me?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "That's why you have been recalled! To help solve your own homicide. I hear it helps you rest better."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "How can we communicate?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "All cats are psychic, dipshit."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "..."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Don't worry about it too hard, just focus on getting used to being dead. We have detective work to do! First, we must question all your compatriots."
				},
			]
		}, 
		loss: {
			speakers: ["Purroit", "Jake"],
			messages: [
				{
					speaker: "Purroit",
					side: "left",
					text: "Soooo, bad news."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "I just got used to being dead, how bad can it be?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "I sorta may have fumbled the bag..."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "..."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "I may or may not have arrested one of your friends who was immediately cleared by their lawyer and released."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "...even though they were guilty?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "I looked over his reasoning and it is pretty solid, the one I arrested is totally innocent."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "Wait, so you have no idea who did it?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Well I might have a second idea, but..."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "What is it?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "After I arrested the wrong person, the rest of your friends sorta got scared about being arrested for murder and fled the country."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "So my murderer got away?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Yep."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "..."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "I simply would have asked for a human detective."
				},
				{
					lossScreen: true
				}
			]
		}, 
		win: {
			speakers: ["Purroit", "Jake"],
			messages: [
				{
					speaker: "Purroit",
					side: "left",
					text: "So, good news!"
				},
				{
					speaker: "Jake",
					side: "right",
					text: "How good can it be? I'm dead."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Don't be such a spoil sport. We got your murderer!"
				},
				{
					speaker: "Jake",
					side: "right",
					text: "Is this when you tell me and I move on to the afterlife?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Don't ask me hard questions, I'm not a ghostologist."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "It was Alex!"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "After some double checking by an actual competent detective, my reasoning appears to be correct!"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "She went a little cuckoo after her and Tara had a fight about asking you out, which is a pretty mega compliment imo"
				},
				{
					speaker: "Jake",
					side: "right",
					text: "...I'm dead."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Tomato Tomahto. Anyway, she decided to kill you since she couldn't have you, and frame Tara, for some nice dramatic irony."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "It almost worked out, but she didn't cover her framing weapon in blood, and left the real murder weapon in her suitcase. Pretty meh murder if you ask me."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "So I got killed because she wanted to date me and Tara said she had dibs?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "You oughta choose your friends better. I don't really know if ghosts get friends, but this is an important lesson you have learned regardless."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "..."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "You are such a sadsack."
				},
				{
					speaker: "Jake",
					side: "right",
					text: "Do I move on now or something?"
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "My namebadge says DETECTIVE not GHOSTOMOLOGIST. Maybe you're destined to help me solve OTHER murders!"
				},
				{
					speaker: "Jake",
					side: "right",
					text: "I think I'm gonna go haunt Alex in prison."
				},
				{
					speaker: "Purroit",
					side: "left",
					text: "Welp. Ghost solved. Murder sent away. Another successful case by Detective Purroit!"
				},
				{
					winScreen: true
				}
			]
		}
	}
}
// SCENESTATE VARIABLE ss
const ss = {}
// LOCATION LOADER ll
const ll = {}
// SCENECARD LOADER sc
const sc = {}
// CONVERSATION LOADER cl
const cl = {
	meta: {

	},
	dialogue: {
		
	}
}
