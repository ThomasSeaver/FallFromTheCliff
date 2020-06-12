class Loader extends Phaser.Scene {
	constructor() {
		super({key: "Loader"})
	}

    preload() {
        sc.text      = "DAY ONE"
        sc.time      = 5000
        sc.nextScene = "Beach"
        sc.styles    = {fontSize: '32px', boundsAlignH: "center", boundsAlignV: "middle"}
		this.load.image("RiverBG", "./assets/River.png")
		this.load.image("BeachBG", "./assets/BeachBg.png")
		this.load.image("CampBG", "./assets/Camp.png")
		this.load.image("ExitBG", "./assets/Exit.png")
		this.load.image("CliffBG", "./assets/Cliff.png")
        this.load.image("playerAlive", "./assets/Purroit.png")		
		this.load.image("boxBG", "./assets/ce.png")	
		this.load.image("DialogueIndicator", "./assets/dialogueIndicator.png")
        this.load.image("dialogueBG", "./assets/tmc.png")
        this.load.image("AlexBG", "./assets/tscAlex.png")
        this.load.image("CopBG", "./assets/tscCop.png")
        this.load.image("GeorgeBG", "./assets/tscGeorge.png")
        this.load.image("JakeBG", "./assets/tscJake.png")
        this.load.image("KatieBG", "./assets/tscKatie.png")
        this.load.image("MoeBG", "./assets/tscMoe.png")
        this.load.image("PurroitBG", "./assets/tscPurroit.png")
        this.load.image("TaraBG", "./assets/tscTara.png")       
        this.load.image("Alex", "./assets/Alex.png")
        this.load.image("Cop", "./assets/Cop.png")
        this.load.image("George", "./assets/George.png")
        this.load.image("Jake", "./assets/Jake.png")
        this.load.image("Katie", "./assets/Katie.png")
        this.load.image("Moe", "./assets/Moe.png")
        this.load.image("Purroit", "./assets/Purroit.png")
        this.load.image("Tara", "./assets/Tara.png")
        this.load.image("DecisionBox", "./assets/decisionBox.png")
        this.load.audio("music", "./assets/music.mp3")

    }

    create() {
        var musicConfig = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        var music = this.sound.add("music", musicConfig)
        music.play()
        cl.meta.returnScene = "Beach"
        cl.meta.returnPos   = {x: gs.centerX, y: gs.centerY}
        cl.entity           = {dialogues: [gs.dialogues.first], talkedTo: false}
        this.scene.start("Conversation")
    }
}   