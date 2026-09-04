(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Mc="modulepreload",Sc=function(i,e){return new URL(i,e).href},Ea={},nr=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(d=>{if(d=Sc(d,n),d in Ea)return;Ea[d]=!0;const u=d.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!n)for(let x=o.length-1;x>=0;x--){const m=o[x];if(m.href===d&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":Mc,u||(_.as="script"),_.crossOrigin="",_.href=d,c&&_.setAttribute("nonce",c),document.head.appendChild(_),u)return new Promise((x,m)=>{_.addEventListener("load",x),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},ba=JSON.parse(`[{"id":"neon-orbit-drift","name":"Neon Orbit Drift","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-orbit-drift/","description":"One-tap gravitational slingshot runner with harmonic chords & orbital drift physics.","tech":["Canvas 2D","Web Audio Synth","Physics"],"badgeClass":"btn-orbit"},{"id":"cyber-pinball-fx","name":"Cyber Pinball FX","icon":"⚡","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pinball-fx/","description":"High-speed neon arcade pinball table with multi-bumpers, chime feedback & dual flippers.","tech":["Canvas 2D","Bumper Physics","Audio FX"],"badgeClass":"btn-pinball"},{"id":"neon-katana-slash","name":"Neon Katana Slash (Fruit Ninja)","icon":"🍉","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/neon-katana-slash/","description":"Super juicy Fruit Ninja blade slicer! Swipe glowing blade trails to slice flying fruits and build massive combos.","tech":["Canvas 2D","Swipe Slicer","Fruit Combos"],"badgeClass":"btn-katana"},{"id":"cute-mini-golf","name":"Cute Mini Golf 3D","icon":"⛳","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cute-mini-golf/","description":"Nintendo-style mini golf with 3 kawaii golfers, 3D animated putters & authentic cup suction.","tech":["Three.js 3D","Cannon-es","Web Audio"],"badgeClass":"btn-golf"},{"id":"kawaii-8ball-pool","name":"Kawaii 8-Ball Pool","icon":"🎱","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/kawaii-8ball-pool/","description":"Super cute 8-ball pool where every ball has an animated kawaii face with squish physics.","tech":["Canvas 2D","2-Player","Squish Physics"],"badgeClass":"btn-pool"},{"id":"stickman-fps-arcade","name":"Stickman FPS Arcade","icon":"🔫","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/stickman-fps-arcade/","description":"Retro stationary bunker shooter with 5 weapons, shop upgrades and wave defense.","tech":["Canvas 2D","Shop Upgrades","Web Audio"],"badgeClass":"btn-fps"},{"id":"geometricsurvivor","name":"Geometric Survivor 3D","icon":"⚔️","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/geometricsurvivor/","description":"Megabonk-style 3D cartoon survivor on a floating island! 3 heroes (Sir Bonk, Pippin & Sparky), healing hearts, invincibility & speed buffs.","tech":["Three.js 3D","3 Heroes","Vampire Upgrades"],"badgeClass":"btn-geo"},{"id":"neon-drift-racer","name":"Neon Drift Racer","icon":"🏎️","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drift-racer/","description":"High-speed synthwave pseudo-3D highway racer with nitro boost and touch controls.","tech":["Canvas 3D Projection","Nitro System","Retro"],"badgeClass":"btn-racer"},{"id":"cyber-pong-3d","name":"Kawaii Table Tennis 3D","icon":"🏓","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pong-3d/","description":"Super cute 3D table tennis with Kawaii eye paddles, generous hitboxes, 1-to-1 mouse controls, bouncy ball physics & sweet audio FX.","tech":["Three.js 3D","Paddle Physics","Cute Audio"],"badgeClass":"btn-pong"},{"id":"neon-viper","name":"Neon Viper 3D","icon":"🐍","category":"arcade","unit":"MASS","url":"https://marcuscaiado.github.io/neon-viper/","description":"3D Snake.io cyber arena with 8 3D skins, 10+ smart AI bots, radar minimap, nitro boost & safe body coiling.","tech":["Three.js 3D","Snake.io Physics","8 Skins"],"badgeClass":"btn-viper"},{"id":"brick-breaker-fx","name":"Brick Breaker FX","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/brick-breaker-fx/","description":"Juice-packed neon breakout arcade game with multi-ball power-ups, paddle expansion & shatter physics.","tech":["Canvas 2D","Multi-Ball","Power-Ups"],"badgeClass":"btn-brick"},{"id":"sky-ace-1944","name":"Sky Ace 1944","icon":"🛩️","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/sky-ace-1944/","description":"Vertical retro WWII bullet-hell shooter with mega bombs, shields & quad spread.","tech":["Canvas 2D","Bullet Patterns","Boss Battles"],"badgeClass":"btn-sky"},{"id":"neon-drop-2048","name":"Neon Drop 2048","icon":"🧩","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drop-2048/","description":"Physics merge puzzle with glowing bouncy 2048 balls and satisfying pop chain reactions.","tech":["Canvas 2D","Circle Physics","Suika Merge"],"badgeClass":"btn-drop"},{"id":"asteroid-blitz","name":"Asteroid Blitz","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/asteroid-blitz/","description":"Classic vector space shooter with inertia physics, hyperspace warp & splitting rocks.","tech":["Canvas 2D Vector","Inertia Physics","Retro"],"badgeClass":"btn-asteroid"},{"id":"neon-tetris-3d","name":"Neon Cyber Tetris 3D","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-tetris-3d/","description":"Tetris Effect-style 3D falling tetrominoes in a holographic cyber matrix with laser line clears and popping glowing graphics.","tech":["Three.js 3D","Ghost Projection","Synth Audio","SRS Rotation"],"badgeClass":"btn-tetris"},{"id":"neon-archery-master","name":"Neon Archery Master","icon":"🎯","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/neon-archery-master/","description":"Precision bow archery with trajectory prediction, crosswinds & holographic targets.","tech":["Canvas 2D","Ballistics Math","Wind Physics"],"badgeClass":"btn-archery"},{"id":"neon-stack-3d","name":"Neon Stack Harmony 3D","icon":"🌌","category":"arcade","unit":"SLABS","url":"https://marcuscaiado.github.io/neon-stack-3d/","description":"3D block slicing tower stacking with soothing pentatonic synth chords.","tech":["Three.js 3D","Web Audio","Slicing Math"],"badgeClass":"btn-stack"},{"id":"neon-pachinko-pop","name":"Neon Pachinko Pop","icon":"🔮","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-pachinko-pop/","description":"Peggle-style bouncy pachinko drop with jackpot buckets and neon bumpers.","tech":["Canvas 2D","Peg Physics","Jackpot Zones"],"badgeClass":"btn-pachinko"},{"id":"cyber-runner-3d","name":"Cyber Runner 3D","icon":"🏃","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-runner-3d/","description":"Fast-paced synthwave 3-lane obstacle runner with jump mechanics and power-ups.","tech":["Canvas 3D","Perspective Math","Endless"],"badgeClass":"btn-runner"},{"id":"cyber-shuriken","name":"Cyber Shuriken Neo","icon":"🎯","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-shuriken/","description":"Rhythmic knife throwing into rotating boss matrices with harmonic chimes.","tech":["Canvas 2D","Rotational Math","Boss Waves"],"badgeClass":"btn-shuriken"},{"id":"flappy-cyber-droid","name":"Flappy Cyber Droid","icon":"🐦","category":"arcade","unit":"GATES","url":"https://marcuscaiado.github.io/flappy-cyber-droid/","description":"Addictive neon flapper arcade game featuring a hovering cyber-droid, laser gates & energy crystals.","tech":["Canvas 2D","One-Tap Flap","Laser Gates"],"badgeClass":"btn-droid"},{"id":"street-fighter-2","name":"Street Fighter II Turbo","icon":"🥊","category":"action","unit":"WINS","url":"https://marcuscaiado.github.io/street-fighter-2/","description":"Authentic Capcom arcade fighting! All 12 fighters, Turbo speed modes, Hadoukens, Shoryukens, and 60 FPS WebAssembly emulation.","tech":["WASM EmulatorJS","12 Fighters","Turbo Mode"],"badgeClass":"btn-fighter"},{"id":"super-mario","name":"Super Mario World","icon":"🍄","category":"retro","unit":"EXITS","url":"https://marcuscaiado.github.io/super-mario/","description":"The legendary Super Nintendo masterpiece! Ride Yoshi, soar with the magic cape, explore Dinosaur Land, and run in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Yoshi & Cape","96 Exits"],"badgeClass":"btn-mario"},{"id":"super-bomberman","name":"Super Bomberman","icon":"💣","category":"retro","unit":"WINS","url":"https://marcuscaiado.github.io/super-bomberman/","description":"The ultimate explosive party battle! Drop bombs, collect powerups, blast soft blocks, and battle across arenas in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Hudson Soft","Arena Battle"],"badgeClass":"btn-bomberman"},{"id":"gta-2","name":"Grand Theft Auto 2","icon":"🚗","category":"action","unit":"RESPECT","url":"https://marcuscaiado.github.io/gta-2/","description":"Rockstar's legendary top-down crime epic! Steal cars, outrun police, answer payphones, and rule the city in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Rockstar Games","Open World"],"badgeClass":"btn-gta"},{"id":"classic-doom","name":"Classic DOOM","icon":"🔥","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/classic-doom/","description":"The father of FPS! Rip and tear through phobos base with shotgun, chainsaw, rocket launcher and BFG9000 in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","id Software","FPS 60 FPS"],"badgeClass":"btn-doom"},{"id":"classic-pacman","name":"Pac-Man (1980 Classic Arcade)","icon":"🟡","category":"retro","unit":"PTS","url":"games/pacman/index.html","description":"The immortal 1980 Namco arcade classic! Chomp dots, dodge Blinky, Pinky, Inky & Clyde, grab Power Pellets and rack up high scores.","tech":["Canvas 2D","Namco 1980","Authentic Sound"],"badgeClass":"btn-pacman"},{"id":"sonic1","name":"Sonic The Hedgehog","icon":"🦔","category":"retro","unit":"RINGS","url":"games/sonic1/index.html","description":"Sega's supersonic blue blur! Blast through Green Hill Zone, collect gold rings and defeat Dr. Robotnik in 60 FPS WebAssembly.","tech":["WASM Sega Genesis","Sonic Team","60 FPS"],"badgeClass":"btn-sonic"},{"id":"sonic2","name":"Sonic The Hedgehog 2","icon":"🦊","category":"retro","unit":"RINGS","url":"games/sonic2/index.html","description":"The peak of 16-bit speed! Introducing Tails, the legendary Spin Dash Turbo, Chemical Plant Zone, and Super Sonic.","tech":["WASM Sega Genesis","Spin Dash","Sonic & Tails"],"badgeClass":"btn-sonic2"},{"id":"fzero","name":"F-Zero","icon":"🏎️","category":"retro","unit":"PTS","url":"games/fzero/index.html","description":"Nintendo's groundbreaking 1990 futuristic 400+ km/h Mode-7 hovercraft racer with Captain Falcon & the Blue Falcon.","tech":["WASM SNES Mode-7","Nintendo EAD","60 FPS"],"badgeClass":"btn-fzero"},{"id":"mk2","name":"Mortal Kombat II","icon":"🐉","category":"action","unit":"WINS","url":"games/mk2/index.html","description":"Midway's legendary arcade fighting sensation! Scorpion, Sub-Zero, Liu Kang, Shang Tsung, brutal Fatalities & Babalities.","tech":["WASM Sega Genesis","Midway Arcade","Fatalities"],"badgeClass":"btn-mk2"},{"id":"megaman2","name":"Mega Man 2","icon":"🤖","category":"retro","unit":"BOSSES","url":"games/megaman2/index.html","description":"Capcom's 8-bit platforming masterpiece! 8 Robot Masters, Metal Blade, Dr. Wily's Castle and the greatest NES soundtrack ever.","tech":["WASM NES","Capcom 1988","Chiptune Classic"],"badgeClass":"btn-megaman"},{"id":"outrun","name":"OutRun","icon":"🌴","category":"retro","unit":"CHECKPOINTS","url":"games/outrun/index.html","description":"Yu Suzuki's ultimate arcade driving fantasy! Cruise in the red Ferrari Testarossa with Magical Sound Shower on the radio.","tech":["WASM Sega Genesis","Yu Suzuki","Synthwave Classic"],"badgeClass":"btn-outrun"},{"id":"sor2","name":"Streets of Rage 2","icon":"💥","category":"action","unit":"KO","url":"games/sor2/index.html","description":"The crowned king of 90s beat-'em-ups! Axel, Blaze, Skate and Max brawl to Yuzo Koshiro's ground-shaking club house soundtrack.","tech":["WASM Sega Genesis","Yuzo Koshiro","4 Brawlers"],"badgeClass":"btn-sor2"},{"id":"topgear","name":"Top Gear","icon":"🏁","category":"retro","unit":"PTS","url":"games/topgear/index.html","description":"The sacred arcade racing holy grail! Hit the Nitro boost, screech around hairpin turns and blast Barry Leitch's immortal chiptune beats.","tech":["WASM SNES","Gremlin Graphics","Nitro Turbo"],"badgeClass":"btn-topgear"},{"id":"castlevania4","name":"Super Castlevania IV","icon":"🦇","category":"action","unit":"HEARTS","url":"games/castlevania4/index.html","description":"Konami's gothic 16-bit tour de force! 8-way directional whip swinging, rotating rooms, Mode-7 chandeliers and Dracula's legions.","tech":["WASM SNES","Konami 1991","8-Way Whip"],"badgeClass":"btn-castlevania"},{"id":"mslug","name":"Metal Slug (1996)","icon":"💥","category":"action","unit":"PTS","url":"games/mslug/index.html","description":"The immortal SNK Neo-Geo arcade run-and-gun! Blast General Morden's rebel forces with SV-001 tank, heavy machine gun, rocket launcher and rescue POWs.","tech":["WASM Neo-Geo","SNK Arcade","SV-001 Tank"],"badgeClass":"btn-mslug"},{"id":"mslugx","name":"Metal Slug X","icon":"💣","category":"action","unit":"PTS","url":"games/mslugx/index.html","description":"The super-upgraded Neo-Geo definitive edition! Laser guns, Iron Lizard, Super Grenades, alien invaders, mummies, and zero slowdowns at silky 60 FPS.","tech":["WASM Neo-Geo","SNK Arcade","Definitive Edition"],"badgeClass":"btn-mslugx"}]`);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="182",yc=0,Ta=1,Ec=2,os=1,bc=2,Ai=3,vn=0,It=1,yt=2,_n=0,li=1,Aa=2,wa=3,Ra=4,Tc=5,zn=100,Ac=101,wc=102,Rc=103,Cc=104,Pc=200,Lc=201,Dc=202,Ic=203,ir=204,sr=205,Uc=206,Nc=207,Fc=208,Oc=209,Bc=210,kc=211,zc=212,Gc=213,Vc=214,rr=0,ar=1,or=2,di=3,cr=4,lr=5,hr=6,dr=7,Ro=0,Hc=1,Wc=2,nn=0,Co=1,Po=2,Lo=3,Do=4,Io=5,Uo=6,No=7,Fo=300,Wn=301,ui=302,ur=303,fr=304,gs=306,Ri=1e3,mn=1001,pr=1002,Et=1003,Xc=1004,Gi=1005,_t=1006,Es=1007,Vn=1008,zt=1009,Oo=1010,Bo=1011,Ci=1012,Qr=1013,an=1014,en=1015,Mn=1016,ea=1017,ta=1018,Pi=1020,ko=35902,zo=35899,Go=1021,Vo=1022,Kt=1023,Sn=1026,Hn=1027,Ho=1028,na=1029,fi=1030,ia=1031,sa=1033,cs=33776,ls=33777,hs=33778,ds=33779,mr=35840,gr=35841,_r=35842,xr=35843,vr=36196,Mr=37492,Sr=37496,yr=37488,Er=37489,br=37490,Tr=37491,Ar=37808,wr=37809,Rr=37810,Cr=37811,Pr=37812,Lr=37813,Dr=37814,Ir=37815,Ur=37816,Nr=37817,Fr=37818,Or=37819,Br=37820,kr=37821,zr=36492,Gr=36494,Vr=36495,Hr=36283,Wr=36284,Xr=36285,qr=36286,qc=3200,Wo=0,Yc=1,Rn="",Ht="srgb",pi="srgb-linear",fs="linear",et="srgb",Yn=7680,Ca=519,jc=512,Kc=513,$c=514,ra=515,Zc=516,Jc=517,aa=518,Qc=519,Pa=35044,La="300 es",tn=2e3,ps=2001;function Xo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function el(){const i=ms("canvas");return i.style.display="block",i}const Da={};function Ia(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ie(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ye(...i){const e="THREE."+i.shift();console.error(e,...i)}function Li(...i){const e=i.join(" ");e in Da||(Da[e]=!0,Ie(...i))}function tl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bs=Math.PI/180,Yr=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function nl(i,e){return(i%e+e)%e}function Ts(i,e,t){return(1-t)*i+t*e}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ni{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==f||c!==p||d!==_){let m=l*f+c*p+d*_+u*x;m<0&&(f=-f,p=-p,_=-_,x=-x,m=-m);let h=1-o;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);h=Math.sin(h*S)/b,o=Math.sin(o*S)/b,l=l*h+f*o,c=c*h+p*o,d=d*h+_*o,u=u*h+x*o}else{l=l*h+f*o,c=c*h+p*o,d=d*h+_*o,u=u*h+x*o;const S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+d*u+l*p-c*f,e[t+1]=l*_+d*f+c*u-o*p,e[t+2]=c*_+d*p+o*f-l*u,e[t+3]=d*_-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*p*_,this._y=c*p*u-f*d*_,this._z=c*d*_+f*p*u,this._w=c*d*u-f*p*_;break;case"YXZ":this._x=f*d*u+c*p*_,this._y=c*p*u-f*d*_,this._z=c*d*_-f*p*u,this._w=c*d*u+f*p*_;break;case"ZXY":this._x=f*d*u-c*p*_,this._y=c*p*u+f*d*_,this._z=c*d*_+f*p*u,this._w=c*d*u-f*p*_;break;case"ZYX":this._x=f*d*u-c*p*_,this._y=c*p*u+f*d*_,this._z=c*d*_-f*p*u,this._w=c*d*u+f*p*_;break;case"YZX":this._x=f*d*u+c*p*_,this._y=c*p*u+f*d*_,this._z=c*d*_-f*p*u,this._w=c*d*u-f*p*_;break;case"XZY":this._x=f*d*u-c*p*_,this._y=c*p*u-f*d*_,this._z=c*d*_+f*p*u,this._w=c*d*u+f*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return As.copy(this).projectOnVector(e),this.sub(As)}reflect(e){return this.sub(As.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new O,Ua=new Ni;class Ne{constructor(e,t,n,s,r,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],p=n[5],_=n[8],x=s[0],m=s[3],h=s[6],S=s[1],b=s[4],y=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*x+o*S+l*A,r[3]=a*m+o*b+l*w,r[6]=a*h+o*y+l*R,r[1]=c*x+d*S+u*A,r[4]=c*m+d*b+u*w,r[7]=c*h+d*y+u*R,r[2]=f*x+p*S+_*A,r[5]=f*m+p*b+_*w,r[8]=f*h+p*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,f=o*l-d*r,p=c*r-a*l,_=t*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-d*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ws.makeScale(e,t)),this}rotate(e){return this.premultiply(ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new Ne,Na=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fa=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function il(){const i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:e,whitePoint:n,transfer:fs,toXYZ:Na,fromXYZ:Fa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Na,fromXYZ:Fa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}const je=il();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class sl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jn===void 0&&(jn=ms("canvas")),jn.width=e.width,jn.height=e.height;const s=jn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rl=0;class oa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rs(s[a].image)):r.push(Rs(s[a]))}else r=Rs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let al=0;const Cs=new O;class wt extends gi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=mn,s=mn,r=_t,a=Vn,o=Kt,l=zt,c=wt.DEFAULT_ANISOTROPY,d=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=Ui(),this.name="",this.source=new oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cs).x}get height(){return this.source.getSize(Cs).y}get depth(){return this.source.getSize(Cs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Fo;wt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(p+1)/2,A=(h+1)/2,w=(d+f)/4,R=(u+x)/4,U=(_+m)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=U/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=U/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-x)/S,this.z=(f-d)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ol extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new wt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:_t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new oa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qo extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cl extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vi.copy(n.boundingBox)),Vi.applyMatrix4(e.matrixWorld),this.union(Vi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Hi.subVectors(this.max,Mi),Kn.subVectors(e.a,Mi),$n.subVectors(e.b,Mi),Zn.subVectors(e.c,Mi),yn.subVectors($n,Kn),En.subVectors(Zn,$n),In.subVectors(Kn,Zn);let t=[0,-yn.z,yn.y,0,-En.z,En.y,0,-In.z,In.y,yn.z,0,-yn.x,En.z,0,-En.x,In.z,0,-In.x,-yn.y,yn.x,0,-En.y,En.x,0,-In.y,In.x,0];return!Ps(t,Kn,$n,Zn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,Kn,$n,Zn,Hi))?!1:(Wi.crossVectors(yn,En),t=[Wi.x,Wi.y,Wi.z],Ps(t,Kn,$n,Zn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new O,new O,new O,new O,new O,new O,new O,new O],Xt=new O,Vi=new Fi,Kn=new O,$n=new O,Zn=new O,yn=new O,En=new O,In=new O,Mi=new O,Hi=new O,Wi=new O,Un=new O;function Ps(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Un.fromArray(i,r);const o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ll=new Fi,Si=new O,Ls=new O;class ca{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ll.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Si,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(Ls)),this.expandByPoint(Si.copy(e.center).sub(Ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dn=new O,Ds=new O,Xi=new O,bn=new O,Is=new O,qi=new O,Us=new O;class Yo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ds.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Ds);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Xi),o=bn.dot(this.direction),l=-bn.dot(Xi),c=bn.lengthSq(),d=Math.abs(1-a*a);let u,f,p,_;if(d>0)if(u=a*l-o,f=a*o-l,_=r*d,u>=0)if(f>=-_)if(f<=_){const x=1/d;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ds).addScaledVector(Xi,f),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,s,r){Is.subVectors(t,e),qi.subVectors(n,e),Us.crossVectors(Is,qi);let a=this.direction.dot(Us),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,e);const l=o*this.direction.dot(qi.crossVectors(bn,qi));if(l<0)return null;const c=o*this.direction.dot(Is.cross(bn));if(c<0||l+c>a)return null;const d=-o*bn.dot(Us);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,s,r,a,o,l,c,d,u,f,p,_,x,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,f,p,_,x,m)}set(e,t,n,s,r,a,o,l,c,d,u,f,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Jn.setFromMatrixColumn(e,0).length(),r=1/Jn.setFromMatrixColumn(e,1).length(),a=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*d,p=a*u,_=o*d,x=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,_=c*d,x=c*u;t[0]=f+x*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,_=c*d,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*u,_=o*d,x=o*u;t[0]=l*d,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*d,t[4]=x-f*u,t[8]=_*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,x=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+x,t[5]=a*d,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*d,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hl,e,dl)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Tn.crossVectors(n,Ot),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Tn.crossVectors(n,Ot)),Tn.normalize(),Yi.crossVectors(Ot,Tn),s[0]=Tn.x,s[4]=Yi.x,s[8]=Ot.x,s[1]=Tn.y,s[5]=Yi.y,s[9]=Ot.y,s[2]=Tn.z,s[6]=Yi.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],h=n[14],S=n[3],b=n[7],y=n[11],A=n[15],w=s[0],R=s[4],U=s[8],v=s[12],E=s[1],P=s[5],B=s[9],F=s[13],V=s[2],q=s[6],z=s[10],H=s[14],$=s[3],ie=s[7],ne=s[11],ae=s[15];return r[0]=a*w+o*E+l*V+c*$,r[4]=a*R+o*P+l*q+c*ie,r[8]=a*U+o*B+l*z+c*ne,r[12]=a*v+o*F+l*H+c*ae,r[1]=d*w+u*E+f*V+p*$,r[5]=d*R+u*P+f*q+p*ie,r[9]=d*U+u*B+f*z+p*ne,r[13]=d*v+u*F+f*H+p*ae,r[2]=_*w+x*E+m*V+h*$,r[6]=_*R+x*P+m*q+h*ie,r[10]=_*U+x*B+m*z+h*ne,r[14]=_*v+x*F+m*H+h*ae,r[3]=S*w+b*E+y*V+A*$,r[7]=S*R+b*P+y*q+A*ie,r[11]=S*U+b*B+y*z+A*ne,r[15]=S*v+b*F+y*H+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15],S=l*p-c*f,b=o*p-c*u,y=o*f-l*u,A=a*p-c*d,w=a*f-l*d,R=a*u-o*d;return t*(x*S-m*b+h*y)-n*(_*S-m*A+h*w)+s*(_*b-x*A+h*R)-r*(_*y-x*w+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],S=u*m*c-x*f*c+x*l*p-o*m*p-u*l*h+o*f*h,b=_*f*c-d*m*c-_*l*p+a*m*p+d*l*h-a*f*h,y=d*x*c-_*u*c+_*o*p-a*x*p-d*o*h+a*u*h,A=_*u*l-d*x*l-_*o*f+a*x*f+d*o*m-a*u*m,w=t*S+n*b+s*y+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*h-n*f*h)*R,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*h+n*l*h)*R,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*R,e[4]=b*R,e[5]=(d*m*r-_*f*r+_*s*p-t*m*p-d*s*h+t*f*h)*R,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*h-t*l*h)*R,e[7]=(a*f*r-d*l*r+d*s*c-t*f*c-a*s*p+t*l*p)*R,e[8]=y*R,e[9]=(_*u*r-d*x*r-_*n*p+t*x*p+d*n*h-t*u*h)*R,e[10]=(a*x*r-_*o*r+_*n*c-t*x*c-a*n*h+t*o*h)*R,e[11]=(d*o*r-a*u*r-d*n*c+t*u*c+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(d*x*s-_*u*s+_*n*f-t*x*f-d*n*m+t*u*m)*R,e[14]=(_*o*s-a*x*s-_*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*u*s-d*o*s+d*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,f=r*c,p=r*d,_=r*u,x=a*d,m=a*u,h=o*u,S=l*c,b=l*d,y=l*u,A=n.x,w=n.y,R=n.z;return s[0]=(1-(x+h))*A,s[1]=(p+y)*A,s[2]=(_-b)*A,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(f+h))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(_+b)*R,s[9]=(m-S)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Jn.set(s[0],s[1],s[2]).length();const a=Jn.set(s[4],s[5],s[6]).length(),o=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),qt.copy(this);const c=1/r,d=1/a,u=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=tn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let _,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===tn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ps)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===tn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===ps)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new O,qt=new dt,hl=new O(0,0,0),dl=new O(1,1,1),Tn=new O,Yi=new O,Ot=new O,Oa=new dt,Ba=new Ni;class on{constructor(e=0,t=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class la{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ul=0;const ka=new O,Qn=new Ni,un=new dt,ji=new O,yi=new O,fl=new O,pl=new Ni,za=new O(1,0,0),Ga=new O(0,1,0),Va=new O(0,0,1),Ha={type:"added"},ml={type:"removed"},ei={type:"childadded",child:null},Ns={type:"childremoved",child:null};class bt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new O,t=new on,n=new Ni,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ne}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(za,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Va,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(za,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ji.copy(e):ji.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(yi,ji,this.up):un.lookAt(ji,yi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),Qn.setFromRotationMatrix(un),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ha),ei.child=e,this.dispatchEvent(ei),ei.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ml),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ha),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,fl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,pl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new O(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new O,fn=new O,Fs=new O,pn=new O,ti=new O,ni=new O,Wa=new O,Os=new O,Bs=new O,ks=new O,zs=new mt,Gs=new mt,Vs=new mt;class jt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yt.subVectors(e,t),s.cross(Yt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yt.subVectors(s,t),fn.subVectors(n,t),Fs.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(fn),l=Yt.dot(Fs),c=fn.dot(fn),d=fn.dot(Fs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*d)*f,_=(a*d-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return zs.setScalar(0),Gs.setScalar(0),Vs.setScalar(0),zs.fromBufferAttribute(e,t),Gs.fromBufferAttribute(e,n),Vs.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(zs,r.x),a.addScaledVector(Gs,r.y),a.addScaledVector(Vs,r.z),a}static isFrontFacing(e,t,n,s){return Yt.subVectors(n,t),fn.subVectors(e,t),Yt.cross(fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Yt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ti.subVectors(s,n),ni.subVectors(r,n),Os.subVectors(e,n);const l=ti.dot(Os),c=ni.dot(Os);if(l<=0&&c<=0)return t.copy(n);Bs.subVectors(e,s);const d=ti.dot(Bs),u=ni.dot(Bs);if(d>=0&&u<=d)return t.copy(s);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(ti,a);ks.subVectors(e,r);const p=ti.dot(ks),_=ni.dot(ks);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ni,o);const m=d*_-p*u;if(m<=0&&u-d>=0&&p-_>=0)return Wa.subVectors(r,s),o=(u-d)/(u-d+(p-_)),t.copy(s).addScaledVector(Wa,o);const h=1/(m+x+f);return a=x*h,o=f*h,t.copy(n).addScaledVector(ti,a).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Hs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=nl(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hs(a,r,e+1/3),this.g=Hs(a,r,e),this.b=Hs(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return je.workingToColorSpace(At.copy(this),e),Math.round(He(At.r*255,0,255))*65536+Math.round(He(At.g*255,0,255))*256+Math.round(He(At.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ht){je.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Ki);const n=Ts(An.h,Ki.h,t),s=Ts(An.s,Ki.s,t),r=Ts(An.l,Ki.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Xe;Xe.NAMES=jo;let gl=0;class Oi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=li,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ir,this.blendDst=sr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ir&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ct extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,$i=new qe;let _l=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_l++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$i.fromBufferAttribute(this,t),$i.applyMatrix3(e),this.setXY(t,$i.x,$i.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),e}}class Ko extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $o extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xl=0;const Vt=new dt,Ws=new bt,ii=new O,Bt=new Fi,Ei=new Fi,Mt=new O;class Ut extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xo(e)?$o:Ko)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Ws.lookAt(e),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Bt.min,Ei.min),Bt.expandByPoint(Mt),Mt.addVectors(Bt.max,Ei.max),Bt.expandByPoint(Mt)):(Bt.expandByPoint(Ei.min),Bt.expandByPoint(Ei.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Mt.fromBufferAttribute(o,c),l&&(ii.fromBufferAttribute(e,c),Mt.add(ii)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new O,l[U]=new O;const c=new O,d=new O,u=new O,f=new qe,p=new qe,_=new qe,x=new O,m=new O;function h(U,v,E){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,v),_.fromBufferAttribute(r,E),d.sub(c),u.sub(c),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(P),o[U].add(x),o[v].add(x),o[E].add(x),l[U].add(m),l[v].add(m),l[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,v=S.length;U<v;++U){const E=S[U],P=E.start,B=E.count;for(let F=P,V=P+B;F<V;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new O,y=new O,A=new O,w=new O;function R(U){A.fromBufferAttribute(s,U),w.copy(A);const v=o[U];b.copy(v),b.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(w,v);const P=y.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,P)}for(let U=0,v=S.length;U<v;++U){const E=S[U],P=E.start,B=E.count;for(let F=P,V=P+B;F<V;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,d=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let h=0;h<d;h++)f[_++]=c[p++]}return new rn(f,d,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new dt,Nn=new Yo,Zi=new ca,qa=new O,Ji=new O,Qi=new O,es=new O,Xs=new O,ts=new O,Ya=new O,ns=new O;class ve extends bt{constructor(e=new Ut,t=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(Xs.fromBufferAttribute(u,e),a?ts.addScaledVector(Xs,d):ts.addScaledVector(Xs.sub(t),d))}t.add(ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),!(Zi.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Zi,qa)===null||Nn.origin.distanceToSquared(qa)>(e.far-e.near)**2))&&(Xa.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,A=b;y<A;y+=3){const w=o.getX(y),R=o.getX(y+1),U=o.getX(y+2);s=is(this,h,e,n,c,d,u,w,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const S=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=is(this,a,e,n,c,d,u,S,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,A=b;y<A;y+=3){const w=y,R=y+1,U=y+2;s=is(this,h,e,n,c,d,u,w,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const S=m,b=m+1,y=m+2;s=is(this,a,e,n,c,d,u,S,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function vl(i,e,t,n,s,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===vn,o),l===null)return null;ns.copy(o),ns.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ns);return c<t.near||c>t.far?null:{distance:c,point:ns.clone(),object:i}}function is(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ji),i.getVertexPosition(l,Qi),i.getVertexPosition(c,es);const d=vl(i,e,t,n,Ji,Qi,es,Ya);if(d){const u=new O;jt.getBarycoord(Ya,Ji,Qi,es,u),s&&(d.uv=jt.getInterpolatedAttribute(s,o,l,c,u,new qe)),r&&(d.uv1=jt.getInterpolatedAttribute(r,o,l,c,u,new qe)),a&&(d.normal=jt.getInterpolatedAttribute(a,o,l,c,u,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};jt.getNormal(Ji,Qi,es,f.normal),d.face=f,d.barycoord=u}return d}class rt extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(u,2));function _(x,m,h,S,b,y,A,w,R,U,v){const E=y/R,P=A/U,B=y/2,F=A/2,V=w/2,q=R+1,z=U+1;let H=0,$=0;const ie=new O;for(let ne=0;ne<z;ne++){const ae=ne*P-F;for(let ee=0;ee<q;ee++){const Pe=ee*E-B;ie[x]=Pe*S,ie[m]=ae*b,ie[h]=V,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[h]=w>0?1:-1,d.push(ie.x,ie.y,ie.z),u.push(ee/R),u.push(1-ne/U),H+=1}}for(let ne=0;ne<U;ne++)for(let ae=0;ae<R;ae++){const ee=f+ae+q*ne,Pe=f+ae+q*(ne+1),Fe=f+(ae+1)+q*(ne+1),Ve=f+(ae+1)+q*ne;l.push(ee,Pe,Ve),l.push(Pe,Fe,Ve),$+=6}o.addGroup(p,$,v),p+=$,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const s in n)e[s]=n[s]}return e}function Ml(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Sl={clone:mi,merge:Ct};var yl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,El=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yl,this.fragmentShader=El,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Ml(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jo extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new O,ja=new qe,Ka=new qe;class kt extends Jo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,ja,Ka),t.subVectors(Ka,ja)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class bl extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(si,ri,e,t);s.layers=this.layers,this.add(s);const r=new kt(si,ri,e,t);r.layers=this.layers,this.add(r);const a=new kt(si,ri,e,t);a.layers=this.layers,this.add(a);const o=new kt(si,ri,e,t);o.layers=this.layers,this.add(o);const l=new kt(si,ri,e,t);l.layers=this.layers,this.add(l);const c=new kt(si,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qo extends wt{constructor(e=[],t=Wn,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ec extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rt(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:_n});r.uniforms.tEquirect.value=t;const a=new ve(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=_t),new bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class gn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tl={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tl)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ha{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Al extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wl extends wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Et,d=Et,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ys=new O,Rl=new O,Cl=new Ne;class kn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ys.subVectors(n,t).cross(Rl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cl.getNormalMatrix(e),s=this.coplanarPoint(Ys).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new ca,Pl=new qe(.5,.5),ss=new O;class da{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],p=r[7],_=r[8],x=r[9],m=r[10],h=r[11],S=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,p-d,h-_,A-S).normalize(),s[1].setComponents(c+a,p+d,h+_,A+S).normalize(),s[2].setComponents(c+o,p+u,h+x,A+b).normalize(),s[3].setComponents(c-o,p-u,h-x,A-b).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,h-m,A-y).normalize();else if(s[4].setComponents(c-l,p-f,h-m,A-y).normalize(),t===tn)s[5].setComponents(c+l,p+f,h+m,A+y).normalize();else if(t===ps)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){Fn.center.set(0,0,0);const t=Pl.distanceTo(e.center);return Fn.radius=.7071067811865476+t,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ss.x=s.normal.x>0?e.max.x:e.min.x,ss.y=s.normal.y>0?e.max.y:e.min.y,ss.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xn extends wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di extends wt{constructor(e,t,n=an,s,r,a,o=Et,l=Et,c,d=Sn,u=1){if(d!==Sn&&d!==Hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ll extends Di{constructor(e,t=an,n=Wn,s,r,a=Et,o=Et,l,c=Sn){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tc extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ua extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,d=new qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $t extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],f=[],p=[];let _=0;const x=[],m=n/2;let h=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function S(){const y=new O,A=new O;let w=0;const R=(t-e)/n;for(let U=0;U<=r;U++){const v=[],E=U/r,P=E*(t-e)+e;for(let B=0;B<=s;B++){const F=B/s,V=F*l+o,q=Math.sin(V),z=Math.cos(V);A.x=P*q,A.y=-E*n+m,A.z=P*z,u.push(A.x,A.y,A.z),y.set(q,R,z).normalize(),f.push(y.x,y.y,y.z),p.push(F,1-E),v.push(_++)}x.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){const E=x[v][U],P=x[v+1][U],B=x[v+1][U+1],F=x[v][U+1];(e>0||v!==0)&&(d.push(E,P,F),w+=3),(t>0||v!==r-1)&&(d.push(P,B,F),w+=3)}c.addGroup(h,w,0),h+=w}function b(y){const A=_,w=new qe,R=new O;let U=0;const v=y===!0?e:t,E=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),_++;const P=_;for(let B=0;B<=s;B++){const V=B/s*l+o,q=Math.cos(V),z=Math.sin(V);R.x=v*z,R.y=m*E,R.z=v*q,u.push(R.x,R.y,R.z),f.push(0,E,0),w.x=q*.5+.5,w.y=z*.5*E+.5,p.push(w.x,w.y),_++}for(let B=0;B<s;B++){const F=A+B,V=P+B;y===!0?d.push(V,V+1,F):d.push(V+1,V,F),U+=3}c.addGroup(h,U,y===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wt extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,f=t/l,p=[],_=[],x=[],m=[];for(let h=0;h<d;h++){const S=h*f-a;for(let b=0;b<c;b++){const y=b*u-r;_.push(y,-S,0),x.push(0,0,1),m.push(b/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const b=S+c*h,y=S+c*(h+1),A=S+1+c*(h+1),w=S+1+c*h;p.push(b,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pn extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=e;const f=(t-e)/s,p=new O,_=new qe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const h=r+m/n*a;p.x=u*Math.cos(h),p.y=u*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,d.push(_.x,_.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let h=0;h<n;h++){const S=h+m,b=S,y=S+n+1,A=S+n+2,w=S+1;o.push(b,y,w),o.push(y,A,w)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ii extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new O,f=new O,p=[],_=[],x=[],m=[];for(let h=0;h<=n;h++){const S=[],b=h/n;let y=0;h===0&&a===0?y=.5/t:h===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+b*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+y,1-b),S.push(c++)}d.push(S)}for(let h=0;h<n;h++)for(let S=0;S<t;S++){const b=d[h][S+1],y=d[h][S],A=d[h+1][S],w=d[h+1][S+1];(h!==0||a>0)&&p.push(b,y,w),(h!==n-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fa extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new O,u=new O,f=new O;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,h=(s+1)*(p-1)+_,S=(s+1)*p+_;a.push(x,m,S),a.push(m,h,S)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dl extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class St extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Il extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ul extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _s extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Nl extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const js=new dt,$a=new O,Za=new O;class nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$a.setFromMatrixPosition(e.matrixWorld),t.position.copy($a),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),js.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(js,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(js)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fl extends nc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ks extends _s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class pa extends Jo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ol extends nc{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ja extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Ol}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Bl extends _s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kl extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Qa=new dt;class Gl{constructor(e,t,n=0,s=1/0){this.ray=new Yo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new la,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qa),this}intersectObject(e,t=!0,n=[]){return jr(e,this,n,t),n.sort(eo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)jr(e[s],this,n,t);return n.sort(eo),n}}function eo(i,e){return i.distance-e.distance}function jr(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)jr(r[a],e,t,!0)}}function to(i,e,t,n){const s=Vl(n);switch(t){case Go:return i*e;case Ho:return i*e/s.components*s.byteLength;case na:return i*e/s.components*s.byteLength;case fi:return i*e*2/s.components*s.byteLength;case ia:return i*e*2/s.components*s.byteLength;case Vo:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case sa:return i*e*4/s.components*s.byteLength;case cs:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hs:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gr:case xr:return Math.max(i,16)*Math.max(e,8)/4;case mr:case _r:return Math.max(i,8)*Math.max(e,8)/2;case vr:case Mr:case yr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case br:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Or:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Br:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zr:case Gr:case Vr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hr:case Wr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xr:case qr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vl(i){switch(i){case zt:case Oo:return{byteLength:1,components:1};case Ci:case Bo:case Mn:return{byteLength:2,components:1};case ea:case ta:return{byteLength:2,components:4};case an:case Qr:case en:return{byteLength:4,components:1};case ko:case zo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ic(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hl(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$l=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ql=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ih=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ph=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$h=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$d=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,su=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ru=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,au=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ou=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,du=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_u=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Su=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Wl,alphahash_pars_fragment:Xl,alphamap_fragment:ql,alphamap_pars_fragment:Yl,alphatest_fragment:jl,alphatest_pars_fragment:Kl,aomap_fragment:$l,aomap_pars_fragment:Zl,batching_pars_vertex:Jl,batching_vertex:Ql,begin_vertex:eh,beginnormal_vertex:th,bsdfs:nh,iridescence_fragment:ih,bumpmap_pars_fragment:sh,clipping_planes_fragment:rh,clipping_planes_pars_fragment:ah,clipping_planes_pars_vertex:oh,clipping_planes_vertex:ch,color_fragment:lh,color_pars_fragment:hh,color_pars_vertex:dh,color_vertex:uh,common:fh,cube_uv_reflection_fragment:ph,defaultnormal_vertex:mh,displacementmap_pars_vertex:gh,displacementmap_vertex:_h,emissivemap_fragment:xh,emissivemap_pars_fragment:vh,colorspace_fragment:Mh,colorspace_pars_fragment:Sh,envmap_fragment:yh,envmap_common_pars_fragment:Eh,envmap_pars_fragment:bh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Fh,envmap_vertex:Ah,fog_vertex:wh,fog_pars_vertex:Rh,fog_fragment:Ch,fog_pars_fragment:Ph,gradientmap_pars_fragment:Lh,lightmap_pars_fragment:Dh,lights_lambert_fragment:Ih,lights_lambert_pars_fragment:Uh,lights_pars_begin:Nh,lights_toon_fragment:Oh,lights_toon_pars_fragment:Bh,lights_phong_fragment:kh,lights_phong_pars_fragment:zh,lights_physical_fragment:Gh,lights_physical_pars_fragment:Vh,lights_fragment_begin:Hh,lights_fragment_maps:Wh,lights_fragment_end:Xh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:Yh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Kh,map_fragment:$h,map_pars_fragment:Zh,map_particle_fragment:Jh,map_particle_pars_fragment:Qh,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphinstance_vertex:nd,morphcolor_vertex:id,morphnormal_vertex:sd,morphtarget_pars_vertex:rd,morphtarget_vertex:ad,normal_fragment_begin:od,normal_fragment_maps:cd,normal_pars_fragment:ld,normal_pars_vertex:hd,normal_vertex:dd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:_d,packing:xd,premultiplied_alpha_fragment:vd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:yd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:bd,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:Ad,shadowmap_vertex:wd,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Dd,specularmap_fragment:Id,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:Bd,uv_pars_fragment:kd,uv_pars_vertex:zd,uv_vertex:Gd,worldpos_vertex:Vd,background_vert:Hd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:Yd,cube_frag:jd,depth_vert:Kd,depth_frag:$d,distance_vert:Zd,distance_frag:Jd,equirect_vert:Qd,equirect_frag:eu,linedashed_vert:tu,linedashed_frag:nu,meshbasic_vert:iu,meshbasic_frag:su,meshlambert_vert:ru,meshlambert_frag:au,meshmatcap_vert:ou,meshmatcap_frag:cu,meshnormal_vert:lu,meshnormal_frag:hu,meshphong_vert:du,meshphong_frag:uu,meshphysical_vert:fu,meshphysical_frag:pu,meshtoon_vert:mu,meshtoon_frag:gu,points_vert:_u,points_frag:xu,shadow_vert:vu,shadow_frag:Mu,sprite_vert:Su,sprite_frag:yu},de={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Qt={basic:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ct([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ct([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ct([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ct([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ct([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ct([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ct([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ct([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ct([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ct([de.lights,de.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Qt.physical={uniforms:Ct([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const rs={r:0,b:0,g:0},On=new on,Eu=new dt;function bu(i,e,t,n,s,r,a){const o=new Xe(0);let l=r===!0?0:1,c,d,u=null,f=0,p=null;function _(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1;const A=_(b);A===null?h(o,l):A&&A.isColor&&(h(A,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const A=_(y);A&&(A.isCubeTexture||A.mapping===gs)?(d===void 0&&(d=new ve(new rt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:mi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),On.copy(y.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Eu.makeRotationFromEuler(On)),d.material.toneMapped=je.getTransfer(A.colorSpace)!==et,(u!==A||f!==A.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ve(new Wt(2,2),new cn({name:"BackgroundMaterial",uniforms:mi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=je.getTransfer(A.colorSpace)!==et,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,y){b.getRGB(rs,Zo(i)),n.buffers.color.setClear(rs.r,rs.g,rs.b,y,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:x,addToRenderList:m,dispose:S}}function Tu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(E,P,B,F,V){let q=!1;const z=u(F,B,P);r!==z&&(r=z,c(r.object)),q=p(E,F,B,V),q&&_(E,F,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(E,P,B,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function d(E){return i.deleteVertexArray(E)}function u(E,P,B){const F=B.wireframe===!0;let V=n[E.id];V===void 0&&(V={},n[E.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let z=q[F];return z===void 0&&(z=f(l()),q[F]=z),z}function f(E){const P=[],B=[],F=[];for(let V=0;V<t;V++)P[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:E,attributes:{},index:null}}function p(E,P,B,F){const V=r.attributes,q=P.attributes;let z=0;const H=B.getAttributes();for(const $ in H)if(H[$].location>=0){const ne=V[$];let ae=q[$];if(ae===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function _(E,P,B,F){const V={},q=P.attributes;let z=0;const H=B.getAttributes();for(const $ in H)if(H[$].location>=0){let ne=q[$];ne===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),V[$]=ae,z++}r.attributes=V,r.attributesNum=z,r.index=F}function x(){const E=r.newAttributes;for(let P=0,B=E.length;P<B;P++)E[P]=0}function m(E){h(E,0)}function h(E,P){const B=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;B[E]=1,F[E]===0&&(i.enableVertexAttribArray(E),F[E]=1),V[E]!==P&&(i.vertexAttribDivisor(E,P),V[E]=P)}function S(){const E=r.newAttributes,P=r.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==E[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function b(E,P,B,F,V,q,z){z===!0?i.vertexAttribIPointer(E,P,B,V,q):i.vertexAttribPointer(E,P,B,F,V,q)}function y(E,P,B,F){x();const V=F.attributes,q=B.getAttributes(),z=P.defaultAttributeValues;for(const H in q){const $=q[H];if($.location>=0){let ie=V[H];if(ie===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const ne=ie.normalized,ae=ie.itemSize,ee=e.get(ie);if(ee===void 0)continue;const Pe=ee.buffer,Fe=ee.type,Ve=ee.bytesPerElement,Y=Fe===i.INT||Fe===i.UNSIGNED_INT||ie.gpuType===Qr;if(ie.isInterleavedBufferAttribute){const K=ie.data,le=K.stride,we=ie.offset;if(K.isInstancedInterleavedBuffer){for(let me=0;me<$.locationSize;me++)h($.location+me,K.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<$.locationSize;me++)m($.location+me);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let me=0;me<$.locationSize;me++)b($.location+me,ae/$.locationSize,Fe,ne,le*Ve,(we+ae/$.locationSize*me)*Ve,Y)}else{if(ie.isInstancedBufferAttribute){for(let K=0;K<$.locationSize;K++)h($.location+K,ie.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let K=0;K<$.locationSize;K++)m($.location+K);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let K=0;K<$.locationSize;K++)b($.location+K,ae/$.locationSize,Fe,ne,ae*Ve,ae/$.locationSize*K*Ve,Y)}}else if(z!==void 0){const ne=z[H];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv($.location,ne);break;case 3:i.vertexAttrib3fv($.location,ne);break;case 4:i.vertexAttrib4fv($.location,ne);break;default:i.vertexAttrib1fv($.location,ne)}}}}S()}function A(){U();for(const E in n){const P=n[E];for(const B in P){const F=P[B];for(const V in F)d(F[V].object),delete F[V];delete P[B]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const B in P){const F=P[B];for(const V in F)d(F[V].object),delete F[V];delete P[B]}delete n[E.id]}function R(E){for(const P in n){const B=n[P];if(B[E.id]===void 0)continue;const F=B[E.id];for(const V in F)d(F[V].object),delete F[V];delete B[E.id]}}function U(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Au(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=d[_];t.update(p,n,1)}function l(c,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=d[x]*f[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wu(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Kt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==en&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:w}}function Ru(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new kn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{const S=r?0:n,b=S*4;let y=h.clippingState||null;l.value=y,y=d(_,f,b,p);for(let A=0;A!==b;++A)y[A]=t[A];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,y=p;b!==x;++b,y+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Cu(i){let e=new WeakMap;function t(a,o){return o===ur?a.mapping=Wn:o===fr&&(a.mapping=ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ur||o===fr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ec(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Cn=4,no=[.125,.215,.35,.446,.526,.582],Gn=20,Pu=256,bi=new pa,io=new Xe;let $s=null,Zs=0,Js=0,Qs=!1;const Lu=new O;class so{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lu}=r;$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Zs,Js),this._renderer.xr.enabled=Qs,e.scissorTest=!1,ai(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:Mn,format:Kt,colorSpace:pi,depthBuffer:!1},s=ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Du(r)),this._blurMaterial=Uu(r,e,t),this._ggxMaterial=Iu(r,e,t)}return s}_compileMaterial(e){const t=new ve(new Ut,e);this._renderer.compile(t,bi)}_sceneToCubeUV(e,t,n,s,r){const l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(io),u.toneMapping=nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new rt,new ct({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,h=!0):(m.color.copy(io),h=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const A=this._cubeSize;ai(s,y*A,b>2?A:0,A,A),u.setRenderTarget(s),h&&u.render(x,l),u.render(e,l)}u.toneMapping=p,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Wn||e.mapping===ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ai(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),f=0+c*1.25,p=u*f,{_lodMax:_}=this,x=this._sizeLods[n],m=3*x*(n>_-Cn?n-_+Cn:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,ai(r,m,h,3*x,2*x),s.setRenderTarget(r),s.render(o,bi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,ai(e,m,h,3*x,2*x),s.setRenderTarget(e),s.render(o,bi)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),x=r/_,m=isFinite(r)?1+Math.floor(d*x):Gn;m>Gn&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const h=[];let S=0;for(let R=0;R<Gn;++R){const U=R/x,v=Math.exp(-U*U/2);h.push(v),R===0?S+=v:R<m&&(S+=2*v)}for(let R=0;R<h.length;R++)h[R]=h[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const y=this._sizeLods[s],A=3*y*(s>b-Cn?s-b+Cn:0),w=4*(this._cubeSize-y);ai(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(u,bi)}}function Du(i){const e=[],t=[],n=[];let s=i;const r=i-Cn+1+no.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Cn?l=no[a-i+Cn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,_=6,x=3,m=2,h=1,S=new Float32Array(x*_*p),b=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,U=w>2?0:-1,v=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];S.set(v,x*_*w),b.set(f,m*_*w);const E=[w,w,w,w,w,w];y.set(E,h*_*w)}const A=new Ut;A.setAttribute("position",new rn(S,x)),A.setAttribute("uv",new rn(b,m)),A.setAttribute("faceIndex",new rn(y,h)),n.push(new ve(A,null)),s>Cn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ro(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ai(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Iu(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pu,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Uu(i,e,t){const n=new Float32Array(Gn),s=new O(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ao(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function oo(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ur||l===fr,d=l===Wn||l===ui;if(c||d){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new so(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new so(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Li("WebGLRenderer: "+n+" extension not supported."),s}}}function Ou(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let b=0,y=S.length;b<y;b+=3){const A=S[b+0],w=S[b+1],R=S[b+2];f.push(A,w,w,R,R,A)}}else if(_!==void 0){const S=_.array;x=_.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const A=b+0,w=b+1,R=b+2;f.push(A,w,w,R,R,A)}}else return;const m=new(Xo(f)?$o:Ko)(f,1);m.version=x;const h=r.get(u);h&&e.remove(h),r.set(u,m)}function d(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Bu(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),t.update(p,n,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,n,1)}function u(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,_);let h=0;for(let S=0;S<_;S++)h+=p[S]*x[S];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function ku(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zu(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*A*4*u),R=new qo(w,y,A,u);R.type=en,R.needsUpdate=!0;const U=b*4;for(let E=0;E<u;E++){const P=m[E],B=h[E],F=S[E],V=y*A*4*E;for(let q=0;q<P.count;q++){const z=q*U;p===!0&&(s.fromBufferAttribute(P,q),w[V+z+0]=s.x,w[V+z+1]=s.y,w[V+z+2]=s.z,w[V+z+3]=0),_===!0&&(s.fromBufferAttribute(B,q),w[V+z+4]=s.x,w[V+z+5]=s.y,w[V+z+6]=s.z,w[V+z+7]=0),x===!0&&(s.fromBufferAttribute(F,q),w[V+z+8]=s.x,w[V+z+9]=s.y,w[V+z+10]=s.z,w[V+z+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new qe(y,A)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gu(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Vu={[Co]:"LINEAR_TONE_MAPPING",[Po]:"REINHARD_TONE_MAPPING",[Lo]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[Uo]:"AGX_TONE_MAPPING",[No]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};function Hu(i,e,t,n,s){const r=new sn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new sn(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),o=new Ut;o.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ht([0,2,0,0,2,0],2));const l=new Dl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ve(o,l),d=new pa(-1,1,1,-1,0,1);let u=null,f=null,p=!1,_,x=null,m=[],h=!1;this.setSize=function(S,b){r.setSize(S,b),a.setSize(S,b);for(let y=0;y<m.length;y++){const A=m[y];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){m=S,h=m.length>0&&m[0].isRenderPass===!0;const b=r.width,y=r.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(b,y)}},this.begin=function(S,b){if(p||S.toneMapping===nn&&m.length===0)return!1;if(x=b,b!==null){const y=b.width,A=b.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return h===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=nn,!0},this.hasRenderPass=function(){return h},this.end=function(S,b){S.toneMapping=_,p=!0;let y=r,A=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(S,A,y,b),R.needsSwap!==!1)){const U=y;y=A,A=U}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,l.defines={},je.getTransfer(u)===et&&(l.defines.SRGB_TRANSFER="");const w=Vu[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(x),S.render(c,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const sc=new wt,Kr=new Di(1,1),rc=new qo,ac=new cl,oc=new Qo,co=[],lo=[],ho=new Float32Array(16),uo=new Float32Array(9),fo=new Float32Array(4);function _i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=co[s];if(r===void 0&&(r=new Float32Array(s),co[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vs(i,e){let t=lo[e];t===void 0&&(t=new Int32Array(e),lo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function qu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Yu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function ju(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;fo.set(n),i.uniformMatrix2fv(this.addr,!1,fo),vt(t,n)}}function Ku(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;uo.set(n),i.uniformMatrix3fv(this.addr,!1,uo),vt(t,n)}}function $u(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;ho.set(n),i.uniformMatrix4fv(this.addr,!1,ho),vt(t,n)}}function Zu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Qu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function af(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kr.compareFunction=t.isReversedDepthBuffer()?aa:ra,r=Kr):r=sc,t.setTexture2D(e||r,s)}function of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ac,s)}function cf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||oc,s)}function lf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rc,s)}function hf(i){switch(i){case 5126:return Wu;case 35664:return Xu;case 35665:return qu;case 35666:return Yu;case 35674:return ju;case 35675:return Ku;case 35676:return $u;case 5124:case 35670:return Zu;case 35667:case 35671:return Ju;case 35668:case 35672:return Qu;case 35669:case 35673:return ef;case 5125:return tf;case 36294:return nf;case 36295:return sf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return cf;case 36289:case 36303:case 36311:case 36292:return lf}}function df(i,e){i.uniform1fv(this.addr,e)}function uf(i,e){const t=_i(e,this.size,2);i.uniform2fv(this.addr,t)}function ff(i,e){const t=_i(e,this.size,3);i.uniform3fv(this.addr,t)}function pf(i,e){const t=_i(e,this.size,4);i.uniform4fv(this.addr,t)}function mf(i,e){const t=_i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gf(i,e){const t=_i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _f(i,e){const t=_i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xf(i,e){i.uniform1iv(this.addr,e)}function vf(i,e){i.uniform2iv(this.addr,e)}function Mf(i,e){i.uniform3iv(this.addr,e)}function Sf(i,e){i.uniform4iv(this.addr,e)}function yf(i,e){i.uniform1uiv(this.addr,e)}function Ef(i,e){i.uniform2uiv(this.addr,e)}function bf(i,e){i.uniform3uiv(this.addr,e)}function Tf(i,e){i.uniform4uiv(this.addr,e)}function Af(i,e,t){const n=this.cache,s=e.length,r=vs(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Kr:a=sc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function wf(i,e,t){const n=this.cache,s=e.length,r=vs(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ac,r[a])}function Rf(i,e,t){const n=this.cache,s=e.length,r=vs(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||oc,r[a])}function Cf(i,e,t){const n=this.cache,s=e.length,r=vs(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rc,r[a])}function Pf(i){switch(i){case 5126:return df;case 35664:return uf;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return xf;case 35667:case 35671:return vf;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return yf;case 36294:return Ef;case 36295:return bf;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Cf}}class Lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hf(t.type)}}class Df{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pf(t.type)}}class If{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const er=/(\w+)(\])?(\[|\.)?/g;function po(i,e){i.seq.push(e),i.map[e.id]=e}function Uf(i,e,t){const n=i.name,s=n.length;for(er.lastIndex=0;;){const r=er.exec(n),a=er.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){po(t,c===void 0?new Lf(o,i,e):new Df(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new If(o),po(t,u)),t=u}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Uf(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function mo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Nf=37297;let Ff=0;function Of(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const go=new Ne;function Bf(i){je._getMatrix(go,je.workingColorSpace,i);const e=`mat3( ${go.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case fs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _o(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Of(i.getShaderSource(e),o)}else return r}function kf(i,e){const t=Bf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zf={[Co]:"Linear",[Po]:"Reinhard",[Lo]:"Cineon",[Do]:"ACESFilmic",[Uo]:"AgX",[No]:"Neutral",[Io]:"Custom"};function Gf(i,e){const t=zf[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const as=new O;function Vf(){je.getLuminanceCoefficients(as);const i=as.x.toFixed(4),e=as.y.toFixed(4),t=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Wf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wi(i){return i!==""}function xo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(i){return i.replace(qf,jf)}const Yf=new Map;function jf(i,e){let t=Oe[e];if(t===void 0){const n=Yf.get(e);if(n!==void 0)t=Oe[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $r(t)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(i){return i.replace(Kf,$f)}function $f(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function So(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zf={[os]:"SHADOWMAP_TYPE_PCF",[Ai]:"SHADOWMAP_TYPE_VSM"};function Jf(i){return Zf[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qf={[Wn]:"ENVMAP_TYPE_CUBE",[ui]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE_UV"};function ep(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qf[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const tp={[ui]:"ENVMAP_MODE_REFRACTION"};function np(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ip={[Ro]:"ENVMAP_BLENDING_MULTIPLY",[Hc]:"ENVMAP_BLENDING_MIX",[Wc]:"ENVMAP_BLENDING_ADD"};function sp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ip[i.combine]||"ENVMAP_BLENDING_NONE"}function rp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ap(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jf(t),c=ep(t),d=np(t),u=sp(t),f=rp(t),p=Hf(t),_=Wf(r),x=s.createProgram();let m,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wi).join(`
`),h.length>0&&(h+=`
`)):(m=[So(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),h=[So(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==nn?Gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,kf("linearToOutputTexel",t.outputColorSpace),Vf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=$r(a),a=xo(a,t),a=vo(a,t),o=$r(o),o=xo(o,t),o=vo(o,t),a=Mo(a),o=Mo(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=S+m+a,y=S+h+o,A=mo(s,s.VERTEX_SHADER,b),w=mo(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(w)||"",q=B.trim(),z=F.trim(),H=V.trim();let $=!0,ie=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,w);else{const ne=_o(s,A,"vertex"),ae=_o(s,w,"fragment");Ye("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+ne+`
`+ae)}else q!==""?Ie("WebGLProgram: Program Info Log:",q):(z===""||H==="")&&(ie=!1);ie&&(P.diagnostics={runnable:$,programLog:q,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:h}})}s.deleteShader(A),s.deleteShader(w),U=new us(s,x),v=Xf(s,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Nf)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ff++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let op=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lp(e),t.set(e,n)),n}}class lp{constructor(e){this.id=op++,this.code=e,this.usedTimes=0}}function hp(i,e,t,n,s,r,a){const o=new la,l=new cp,c=new Set,d=[],u=new Map,f=s.logarithmicDepthBuffer;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,P,B,F){const V=B.fog,q=F.geometry,z=v.isMeshStandardMaterial?B.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),$=H&&H.mapping===gs?H.image.height:null,ie=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=ne!==void 0?ne.length:0;let ee=0;q.morphAttributes.position!==void 0&&(ee=1),q.morphAttributes.normal!==void 0&&(ee=2),q.morphAttributes.color!==void 0&&(ee=3);let Pe,Fe,Ve,Y;if(ie){const Je=Qt[ie];Pe=Je.vertexShader,Fe=Je.fragmentShader}else Pe=v.vertexShader,Fe=v.fragmentShader,l.update(v),Ve=l.getVertexShaderID(v),Y=l.getFragmentShaderID(v);const K=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,ke=!!v.map,lt=!!v.matcap,Le=!!H,We=!!v.aoMap,Ke=!!v.lightMap,Ue=!!v.bumpMap,tt=!!v.normalMap,C=!!v.displacementMap,ut=!!v.emissiveMap,$e=!!v.metalnessMap,nt=!!v.roughnessMap,Me=v.anisotropy>0,T=v.clearcoat>0,g=v.dispersion>0,D=v.iridescence>0,X=v.sheen>0,j=v.transmission>0,W=Me&&!!v.anisotropyMap,_e=T&&!!v.clearcoatMap,se=T&&!!v.clearcoatNormalMap,ye=T&&!!v.clearcoatRoughnessMap,Ce=D&&!!v.iridescenceMap,Q=D&&!!v.iridescenceThicknessMap,ce=X&&!!v.sheenColorMap,Se=X&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,oe=!!v.specularColorMap,ze=!!v.specularIntensityMap,L=j&&!!v.transmissionMap,fe=j&&!!v.thicknessMap,te=!!v.gradientMap,pe=!!v.alphaMap,J=v.alphaTest>0,Z=!!v.alphaHash,re=!!v.extensions;let De=nn;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(De=i.toneMapping);const at={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:Fe,defines:v.defines,customVertexShaderID:Ve,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:me,batchingColor:me&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pi,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:lt,envMap:Le,envMapMode:Le&&H.mapping,envMapCubeUVHeight:$,aoMap:We,lightMap:Ke,bumpMap:Ue,normalMap:tt,displacementMap:C,emissiveMap:ut,normalMapObjectSpace:tt&&v.normalMapType===Yc,normalMapTangentSpace:tt&&v.normalMapType===Wo,metalnessMap:$e,roughnessMap:nt,anisotropy:Me,anisotropyMap:W,clearcoat:T,clearcoatMap:_e,clearcoatNormalMap:se,clearcoatRoughnessMap:ye,dispersion:g,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:ce,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:oe,specularIntensityMap:ze,transmission:j,transmissionMap:L,thicknessMap:fe,gradientMap:te,opaque:v.transparent===!1&&v.blending===li&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:Z,combine:v.combine,mapUv:ke&&x(v.map.channel),aoMapUv:We&&x(v.aoMap.channel),lightMapUv:Ke&&x(v.lightMap.channel),bumpMapUv:Ue&&x(v.bumpMap.channel),normalMapUv:tt&&x(v.normalMap.channel),displacementMapUv:C&&x(v.displacementMap.channel),emissiveMapUv:ut&&x(v.emissiveMap.channel),metalnessMapUv:$e&&x(v.metalnessMap.channel),roughnessMapUv:nt&&x(v.roughnessMap.channel),anisotropyMapUv:W&&x(v.anisotropyMap.channel),clearcoatMapUv:_e&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(v.sheenRoughnessMap.channel),specularMapUv:Ee&&x(v.specularMap.channel),specularColorMapUv:oe&&x(v.specularColorMap.channel),specularIntensityMapUv:ze&&x(v.specularIntensityMap.channel),transmissionMapUv:L&&x(v.transmissionMap.channel),thicknessMapUv:fe&&x(v.thicknessMap.channel),alphaMapUv:pe&&x(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tt||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(ke||pe),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yt,flipSided:v.side===It,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function h(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(S(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function S(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const E=_[v.type];let P;if(E){const B=Qt[E];P=Sl.clone(B.uniforms)}else P=v.uniforms;return P}function A(v,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new ap(i,E,v,r),d.push(P),u.set(E,P)),P}function w(v){if(--v.usedTimes===0){const E=d.indexOf(v);d[E]=d[d.length-1],d.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:U}}function dp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,_,x,m){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},i[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=u.renderOrder,h.z=x,h.group=m),e++,h}function o(u,f,p,_,x,m){const h=a(u,f,p,_,x,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(u,f,p,_,x,m){const h=a(u,f,p,_,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||up),n.length>1&&n.sort(f||yo),s.length>1&&s.sort(f||yo)}function d(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function fp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Eo,i.set(n,[a])):s>=r.length?(a=new Eo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function mp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gp=0;function _p(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xp(i){const e=new pp,t=mp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new dt,a=new dt;function o(c){let d=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,S=0,b=0,y=0,A=0,w=0,R=0;c.sort(_p);for(let v=0,E=c.length;v<E;v++){const P=c[v],B=P.color,F=P.intensity,V=P.distance;let q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===fi?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=B.r*F,u+=B.g*F,f+=B.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);R++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,$=t.get(P);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=z,p++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(B).multiplyScalar(F),z.distance=V,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[x]=z;const H=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,H.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=H.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=q,y++}x++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(B).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const H=P.shadow,$=t.get(P);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,b++}n.point[_]=z,_++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[h]=z,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,U.directionalLength=p,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=R,n.version=gp++)}function l(c,d){let u=0,f=0,p=0,_=0,x=0;const m=d.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const b=c[h];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function bo(i){const e=new xp(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new bo(i),e.set(s,[o])):r>=a.length?(o=new bo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yp=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Ep=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],To=new dt,Ti=new O,tr=new O;function bp(i,e,t){let n=new da;const s=new qe,r=new qe,a=new mt,o=new Il,l=new Ul,c={},d=t.maxTextureSize,u={[vn]:It,[It]:vn,[yt]:yt},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Mp,fragmentShader:Sp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ut;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let h=this.type;this.render=function(w,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===bc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=os);const v=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(_n),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=h!==this.type;F&&R.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(q=>q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,q=w.length;V<q;V++){const z=w[V],H=z.shadow;if(H===void 0){Ie("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const $=H.getFrameExtents();if(s.multiply($),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/$.y),s.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ai){if(z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new sn(s.x,s.y,{format:fi,type:Mn,minFilter:_t,magFilter:_t,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Di(s.x,s.y,en),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Sn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et}else{z.isPointLight?(H.map=new ec(s.x),H.map.depthTexture=new Ll(s.x,an)):(H.map=new sn(s.x,s.y),H.map.depthTexture=new Di(s.x,s.y,an)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Sn;const ne=i.state.buffers.depth.getReversed();this.type===os?(H.map.depthTexture.compareFunction=ne?aa:ra,H.map.depthTexture.minFilter=_t,H.map.depthTexture.magFilter=_t):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et)}H.camera.updateProjectionMatrix()}const ie=H.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<ie;ne++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(H.map),i.clear());const ae=H.getViewport(ne);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),B.viewport(a)}if(z.isPointLight){const ae=H.camera,ee=H.matrix,Pe=z.distance||ae.far;Pe!==ae.far&&(ae.far=Pe,ae.updateProjectionMatrix()),Ti.setFromMatrixPosition(z.matrixWorld),ae.position.copy(Ti),tr.copy(ae.position),tr.add(yp[ne]),ae.up.copy(Ep[ne]),ae.lookAt(tr),ae.updateMatrixWorld(),ee.makeTranslation(-Ti.x,-Ti.y,-Ti.z),To.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),H._frustum.setFromProjectionMatrix(To,ae.coordinateSystem,ae.reversedDepth)}else H.updateMatrices(z);n=H.getFrustum(),y(R,U,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Ai&&S(H,U),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(v,E,P)};function S(w,R){const U=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new sn(s.x,s.y,{format:fi,type:Mn})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,U,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,U,p,x,null)}function b(w,R,U,v){let E=null;const P=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=E.uuid,F=R.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let q=V[F];q===void 0&&(q=E.clone(),V[F]=q,R.addEventListener("dispose",A)),E=q}if(E.visible=R.visible,E.wireframe=R.wireframe,v===Ai?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=i.properties.get(E);B.light=U}return E}function y(w,R,U,v,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Ai)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const F=e.update(w),V=w.material;if(Array.isArray(V)){const q=F.groups;for(let z=0,H=q.length;z<H;z++){const $=q[z],ie=V[$.materialIndex];if(ie&&ie.visible){const ne=b(w,ie,v,E);w.onBeforeShadow(i,w,R,U,F,ne,$),i.renderBufferDirect(U,null,F,ne,w,$),w.onAfterShadow(i,w,R,U,F,ne,$)}}}else if(V.visible){const q=b(w,V,v,E);w.onBeforeShadow(i,w,R,U,F,q,null),i.renderBufferDirect(U,null,F,q,w,null),w.onAfterShadow(i,w,R,U,F,q,null)}}const B=w.children;for(let F=0,V=B.length;F<V;F++)y(B[F],R,U,v,E)}function A(w){w.target.removeEventListener("dispose",A);for(const U in c){const v=c[U],E=w.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const Tp={[rr]:ar,[or]:hr,[cr]:dr,[di]:lr,[ar]:rr,[hr]:or,[dr]:cr,[lr]:di};function Ap(i,e){function t(){let L=!1;const fe=new mt;let te=null;const pe=new mt(0,0,0,0);return{setMask:function(J){te!==J&&!L&&(i.colorMask(J,J,J,J),te=J)},setLocked:function(J){L=J},setClear:function(J,Z,re,De,at){at===!0&&(J*=De,Z*=De,re*=De),fe.set(J,Z,re,De),pe.equals(fe)===!1&&(i.clearColor(J,Z,re,De),pe.copy(fe))},reset:function(){L=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,fe=!1,te=null,pe=null,J=null;return{setReversed:function(Z){if(fe!==Z){const re=e.get("EXT_clip_control");Z?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),fe=Z;const De=J;J=null,this.setClear(De)}},getReversed:function(){return fe},setTest:function(Z){Z?K(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(Z){te!==Z&&!L&&(i.depthMask(Z),te=Z)},setFunc:function(Z){if(fe&&(Z=Tp[Z]),pe!==Z){switch(Z){case rr:i.depthFunc(i.NEVER);break;case ar:i.depthFunc(i.ALWAYS);break;case or:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case cr:i.depthFunc(i.EQUAL);break;case lr:i.depthFunc(i.GEQUAL);break;case hr:i.depthFunc(i.GREATER);break;case dr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Z}},setLocked:function(Z){L=Z},setClear:function(Z){J!==Z&&(fe&&(Z=1-Z),i.clearDepth(Z),J=Z)},reset:function(){L=!1,te=null,pe=null,J=null,fe=!1}}}function s(){let L=!1,fe=null,te=null,pe=null,J=null,Z=null,re=null,De=null,at=null;return{setTest:function(Je){L||(Je?K(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Je){fe!==Je&&!L&&(i.stencilMask(Je),fe=Je)},setFunc:function(Je,Zt,ln){(te!==Je||pe!==Zt||J!==ln)&&(i.stencilFunc(Je,Zt,ln),te=Je,pe=Zt,J=ln)},setOp:function(Je,Zt,ln){(Z!==Je||re!==Zt||De!==ln)&&(i.stencilOp(Je,Zt,ln),Z=Je,re=Zt,De=ln)},setLocked:function(Je){L=Je},setClear:function(Je){at!==Je&&(i.clearStencil(Je),at=Je)},reset:function(){L=!1,fe=null,te=null,pe=null,J=null,Z=null,re=null,De=null,at=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,h=null,S=null,b=null,y=null,A=null,w=null,R=new Xe(0,0,0),U=0,v=!1,E=null,P=null,B=null,F=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),z=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=H>=2);let ie=null,ne={};const ae=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Pe=new mt().fromArray(ae),Fe=new mt().fromArray(ee);function Ve(L,fe,te,pe){const J=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<te;re++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(fe+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return Z}const Y={};Y[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(di),Ue(!1),tt(Ta),K(i.CULL_FACE),We(_n);function K(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function le(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function we(L,fe){return u[L]!==fe?(i.bindFramebuffer(L,fe),u[L]=fe,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function me(L,fe){let te=p,pe=!1;if(L){te=f.get(fe),te===void 0&&(te=[],f.set(fe,te));const J=L.textures;if(te.length!==J.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,re=J.length;Z<re;Z++)te[Z]=i.COLOR_ATTACHMENT0+Z;te.length=J.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function ke(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const lt={[zn]:i.FUNC_ADD,[Ac]:i.FUNC_SUBTRACT,[wc]:i.FUNC_REVERSE_SUBTRACT};lt[Rc]=i.MIN,lt[Cc]=i.MAX;const Le={[Pc]:i.ZERO,[Lc]:i.ONE,[Dc]:i.SRC_COLOR,[ir]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Fc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Ic]:i.ONE_MINUS_SRC_COLOR,[sr]:i.ONE_MINUS_SRC_ALPHA,[Oc]:i.ONE_MINUS_DST_COLOR,[Nc]:i.ONE_MINUS_DST_ALPHA,[kc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[Gc]:i.CONSTANT_ALPHA,[Vc]:i.ONE_MINUS_CONSTANT_ALPHA};function We(L,fe,te,pe,J,Z,re,De,at,Je){if(L===_n){x===!0&&(le(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),L!==Tc){if(L!==m||Je!==v){if((h!==zn||y!==zn)&&(i.blendEquation(i.FUNC_ADD),h=zn,y=zn),Je)switch(L){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFunc(i.ONE,i.ONE);break;case wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",L);break}else switch(L){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wa:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ra:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",L);break}S=null,b=null,A=null,w=null,R.set(0,0,0),U=0,m=L,v=Je}return}J=J||fe,Z=Z||te,re=re||pe,(fe!==h||J!==y)&&(i.blendEquationSeparate(lt[fe],lt[J]),h=fe,y=J),(te!==S||pe!==b||Z!==A||re!==w)&&(i.blendFuncSeparate(Le[te],Le[pe],Le[Z],Le[re]),S=te,b=pe,A=Z,w=re),(De.equals(R)===!1||at!==U)&&(i.blendColor(De.r,De.g,De.b,at),R.copy(De),U=at),m=L,v=!1}function Ke(L,fe){L.side===yt?le(i.CULL_FACE):K(i.CULL_FACE);let te=L.side===It;fe&&(te=!te),Ue(te),L.blending===li&&L.transparent===!1?We(_n):We(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){E!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),E=L)}function tt(L){L!==yc?(K(i.CULL_FACE),L!==P&&(L===Ta?i.cullFace(i.BACK):L===Ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),P=L}function C(L){L!==B&&(z&&i.lineWidth(L),B=L)}function ut(L,fe,te){L?(K(i.POLYGON_OFFSET_FILL),(F!==fe||V!==te)&&(i.polygonOffset(fe,te),F=fe,V=te)):le(i.POLYGON_OFFSET_FILL)}function $e(L){L?K(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function nt(L){L===void 0&&(L=i.TEXTURE0+q-1),ie!==L&&(i.activeTexture(L),ie=L)}function Me(L,fe,te){te===void 0&&(ie===null?te=i.TEXTURE0+q-1:te=ie);let pe=ne[te];pe===void 0&&(pe={type:void 0,texture:void 0},ne[te]=pe),(pe.type!==L||pe.texture!==fe)&&(ie!==te&&(i.activeTexture(te),ie=te),i.bindTexture(L,fe||Y[L]),pe.type=L,pe.texture=fe)}function T(){const L=ne[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function X(){try{i.texSubImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function j(){try{i.texSubImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function ye(){try{i.texStorage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Ce(){try{i.texImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Q(){try{i.texImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function ce(L){Pe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function Se(L){Fe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Fe.copy(L))}function Ee(L,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let pe=te.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(fe,L.name),te.set(L,pe))}function oe(L,fe){const pe=c.get(fe).get(L);l.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,L.__bindingPointIndex),l.set(fe,pe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,ne={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,h=null,S=null,b=null,y=null,A=null,w=null,R=new Xe(0,0,0),U=0,v=!1,E=null,P=null,B=null,F=null,V=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:le,bindFramebuffer:we,drawBuffers:me,useProgram:ke,setBlending:We,setMaterial:Ke,setFlipSided:Ue,setCullFace:tt,setLineWidth:C,setPolygonOffset:ut,setScissorTest:$e,activeTexture:nt,bindTexture:Me,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Ce,texImage3D:Q,updateUBOMapping:Ee,uniformBlockBinding:oe,texStorage2D:se,texStorage3D:ye,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:_e,scissor:ce,viewport:Se,reset:ze}}function wp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):ms("canvas")}function x(T,g,D){let X=1;const j=Me(T);if((j.width>D||j.height>D)&&(X=D/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(X*j.width),_e=Math.floor(X*j.height);u===void 0&&(u=_(W,_e));const se=g?_(W,_e):u;return se.width=W,se.height=_e,se.getContext("2d").drawImage(T,0,0,W,_e),Ie("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+_e+")."),se}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,g,D,X,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=g;if(g===i.RED&&(D===i.FLOAT&&(W=i.R32F),D===i.HALF_FLOAT&&(W=i.R16F),D===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.R8UI),D===i.UNSIGNED_SHORT&&(W=i.R16UI),D===i.UNSIGNED_INT&&(W=i.R32UI),D===i.BYTE&&(W=i.R8I),D===i.SHORT&&(W=i.R16I),D===i.INT&&(W=i.R32I)),g===i.RG&&(D===i.FLOAT&&(W=i.RG32F),D===i.HALF_FLOAT&&(W=i.RG16F),D===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RG8UI),D===i.UNSIGNED_SHORT&&(W=i.RG16UI),D===i.UNSIGNED_INT&&(W=i.RG32UI),D===i.BYTE&&(W=i.RG8I),D===i.SHORT&&(W=i.RG16I),D===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGB8UI),D===i.UNSIGNED_SHORT&&(W=i.RGB16UI),D===i.UNSIGNED_INT&&(W=i.RGB32UI),D===i.BYTE&&(W=i.RGB8I),D===i.SHORT&&(W=i.RGB16I),D===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),D===i.UNSIGNED_INT&&(W=i.RGBA32UI),D===i.BYTE&&(W=i.RGBA8I),D===i.SHORT&&(W=i.RGBA16I),D===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){const _e=j?fs:je.getTransfer(X);D===i.FLOAT&&(W=i.RGBA32F),D===i.HALF_FLOAT&&(W=i.RGBA16F),D===i.UNSIGNED_BYTE&&(W=_e===et?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(T,g){let D;return T?g===null||g===an||g===Pi?D=i.DEPTH24_STENCIL8:g===en?D=i.DEPTH32F_STENCIL8:g===Ci&&(D=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===an||g===Pi?D=i.DEPTH_COMPONENT24:g===en?D=i.DEPTH_COMPONENT32F:g===Ci&&(D=i.DEPTH_COMPONENT16),D}function A(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==_t?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),U(g),g.isVideoTexture&&d.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),E(g)}function U(T){const g=n.get(T);if(g.__webglInit===void 0)return;const D=T.source,X=f.get(D);if(X){const j=X[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(T),Object.keys(X).length===0&&f.delete(D)}n.remove(T)}function v(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const D=T.source,X=f.get(D);delete X[g.__cacheKey],a.memory.textures--}function E(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let j=0;j<g.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[X][j]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=T.textures;for(let X=0,j=D.length;X<j;X++){const W=n.get(D[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(D[X])}n.remove(T)}let P=0;function B(){P=0}function F(){const T=P;return T>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function V(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function q(T,g){const D=n.get(T);if(T.isVideoTexture&&$e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const X=T.image;if(X===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,T,g);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+g)}function z(T,g){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){Y(D,T,g);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+g)}function H(T,g){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){Y(D,T,g);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+g)}function $(T,g){const D=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){K(D,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+g)}const ie={[Ri]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},ne={[Et]:i.NEAREST,[Xc]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[_t]:i.LINEAR,[Es]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},ae={[jc]:i.NEVER,[Qc]:i.ALWAYS,[Kc]:i.LESS,[ra]:i.LEQUAL,[$c]:i.EQUAL,[aa]:i.GEQUAL,[Zc]:i.GREATER,[Jc]:i.NOTEQUAL};function ee(T,g){if(g.type===en&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===_t||g.magFilter===Es||g.magFilter===Gi||g.magFilter===Vn||g.minFilter===_t||g.minFilter===Es||g.minFilter===Gi||g.minFilter===Vn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ie[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ie[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ie[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Et||g.minFilter!==Gi&&g.minFilter!==Vn||g.type===en&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Pe(T,g){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const X=g.source;let j=f.get(X);j===void 0&&(j={},f.set(X,j));const W=V(g);if(W!==T.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),j[W].usedTimes++;const _e=j[T.__cacheKey];_e!==void 0&&(j[T.__cacheKey].usedTimes--,_e.usedTimes===0&&v(g)),T.__cacheKey=W,T.__webglTexture=j[W].texture}return D}function Fe(T,g,D){return Math.floor(Math.floor(T/D)/g)}function Ve(T,g,D,X){const W=T.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,D,X,g.data);else{W.sort((Q,ce)=>Q.start-ce.start);let _e=0;for(let Q=1;Q<W.length;Q++){const ce=W[_e],Se=W[Q],Ee=ce.start+ce.count,oe=Fe(Se.start,g.width,4),ze=Fe(ce.start,g.width,4);Se.start<=Ee+1&&oe===ze&&Fe(Se.start+Se.count-1,g.width,4)===oe?ce.count=Math.max(ce.count,Se.start+Se.count-ce.start):(++_e,W[_e]=Se)}W.length=_e+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Q=0,ce=W.length;Q<ce;Q++){const Se=W[Q],Ee=Math.floor(Se.start/4),oe=Math.ceil(Se.count/4),ze=Ee%g.width,L=Math.floor(Ee/g.width),fe=oe,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,ze,L,fe,te,D,X,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Y(T,g,D){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);const j=Pe(T,g),W=g.source;t.bindTexture(X,T.__webglTexture,i.TEXTURE0+D);const _e=n.get(W);if(W.version!==_e.__version||j===!0){t.activeTexture(i.TEXTURE0+D);const se=je.getPrimaries(je.workingColorSpace),ye=g.colorSpace===Rn?null:je.getPrimaries(g.colorSpace),Ce=g.colorSpace===Rn||se===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Q=x(g.image,!1,s.maxTextureSize);Q=nt(g,Q);const ce=r.convert(g.format,g.colorSpace),Se=r.convert(g.type);let Ee=b(g.internalFormat,ce,Se,g.colorSpace,g.isVideoTexture);ee(X,g);let oe;const ze=g.mipmaps,L=g.isVideoTexture!==!0,fe=_e.__version===void 0||j===!0,te=W.dataReady,pe=A(g,Q);if(g.isDepthTexture)Ee=y(g.format===Hn,g.type),fe&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ce,Se,null));else if(g.isDataTexture)if(ze.length>0){L&&fe&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,ze[0].width,ze[0].height);for(let J=0,Z=ze.length;J<Z;J++)oe=ze[J],L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Se,oe.data):t.texImage2D(i.TEXTURE_2D,J,Ee,oe.width,oe.height,0,ce,Se,oe.data);g.generateMipmaps=!1}else L?(fe&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,Q.width,Q.height),te&&Ve(g,Q,ce,Se)):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ce,Se,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,ze[0].width,ze[0].height,Q.depth);for(let J=0,Z=ze.length;J<Z;J++)if(oe=ze[J],g.format!==Kt)if(ce!==null)if(L){if(te)if(g.layerUpdates.size>0){const re=to(oe.width,oe.height,g.format,g.type);for(const De of g.layerUpdates){const at=oe.data.subarray(De*re/oe.data.BYTES_PER_ELEMENT,(De+1)*re/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,De,oe.width,oe.height,1,ce,at)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,Q.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ee,oe.width,oe.height,Q.depth,0,oe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,Q.depth,ce,Se,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ee,oe.width,oe.height,Q.depth,0,ce,Se,oe.data)}else{L&&fe&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,ze[0].width,ze[0].height);for(let J=0,Z=ze.length;J<Z;J++)oe=ze[J],g.format!==Kt?ce!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ee,oe.width,oe.height,0,oe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Se,oe.data):t.texImage2D(i.TEXTURE_2D,J,Ee,oe.width,oe.height,0,ce,Se,oe.data)}else if(g.isDataArrayTexture)if(L){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,Q.width,Q.height,Q.depth),te)if(g.layerUpdates.size>0){const J=to(Q.width,Q.height,g.format,g.type);for(const Z of g.layerUpdates){const re=Q.data.subarray(Z*J/Q.data.BYTES_PER_ELEMENT,(Z+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ce,Se,re)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Se,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,ce,Se,Q.data);else if(g.isData3DTexture)L?(fe&&t.texStorage3D(i.TEXTURE_3D,pe,Ee,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Se,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,ce,Se,Q.data);else if(g.isFramebufferTexture){if(fe)if(L)t.texStorage2D(i.TEXTURE_2D,pe,Ee,Q.width,Q.height);else{let J=Q.width,Z=Q.height;for(let re=0;re<pe;re++)t.texImage2D(i.TEXTURE_2D,re,Ee,J,Z,0,ce,Se,null),J>>=1,Z>>=1}}else if(ze.length>0){if(L&&fe){const J=Me(ze[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ee,J.width,J.height)}for(let J=0,Z=ze.length;J<Z;J++)oe=ze[J],L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce,Se,oe):t.texImage2D(i.TEXTURE_2D,J,Ee,ce,Se,oe);g.generateMipmaps=!1}else if(L){if(fe){const J=Me(Q);t.texStorage2D(i.TEXTURE_2D,pe,Ee,J.width,J.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Se,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ce,Se,Q);m(g)&&h(X),_e.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function K(T,g,D){if(g.image.length!==6)return;const X=Pe(T,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const W=n.get(j);if(j.version!==W.__version||X===!0){t.activeTexture(i.TEXTURE0+D);const _e=je.getPrimaries(je.workingColorSpace),se=g.colorSpace===Rn?null:je.getPrimaries(g.colorSpace),ye=g.colorSpace===Rn||_e===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let Z=0;Z<6;Z++)!Ce&&!Q?ce[Z]=x(g.image[Z],!0,s.maxCubemapSize):ce[Z]=Q?g.image[Z].image:g.image[Z],ce[Z]=nt(g,ce[Z]);const Se=ce[0],Ee=r.convert(g.format,g.colorSpace),oe=r.convert(g.type),ze=b(g.internalFormat,Ee,oe,g.colorSpace),L=g.isVideoTexture!==!0,fe=W.__version===void 0||X===!0,te=j.dataReady;let pe=A(g,Se);ee(i.TEXTURE_CUBE_MAP,g);let J;if(Ce){L&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,Se.width,Se.height);for(let Z=0;Z<6;Z++){J=ce[Z].mipmaps;for(let re=0;re<J.length;re++){const De=J[re];g.format!==Kt?Ee!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,ze,De.width,De.height,0,De.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,De.width,De.height,Ee,oe,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,ze,De.width,De.height,0,Ee,oe,De.data)}}}else{if(J=g.mipmaps,L&&fe){J.length>0&&pe++;const Z=Me(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ce[Z].width,ce[Z].height,Ee,oe,ce[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ce[Z].width,ce[Z].height,0,Ee,oe,ce[Z].data);for(let re=0;re<J.length;re++){const at=J[re].image[Z].image;L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,at.width,at.height,Ee,oe,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,ze,at.width,at.height,0,Ee,oe,at.data)}}else{L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,oe,ce[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Ee,oe,ce[Z]);for(let re=0;re<J.length;re++){const De=J[re];L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,Ee,oe,De.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,ze,Ee,oe,De.image[Z])}}}m(g)&&h(i.TEXTURE_CUBE_MAP),W.__version=j.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function le(T,g,D,X,j,W){const _e=r.convert(D.format,D.colorSpace),se=r.convert(D.type),ye=b(D.internalFormat,_e,se,D.colorSpace),Ce=n.get(g),Q=n.get(D);if(Q.__renderTarget=g,!Ce.__hasExternalTextures){const ce=Math.max(1,g.width>>W),Se=Math.max(1,g.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,W,ye,ce,Se,g.depth,0,_e,se,null):t.texImage2D(j,W,ye,ce,Se,0,_e,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ut(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,Q.__webglTexture,0,C(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,Q.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(T,g,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const X=g.depthTexture,j=X&&X.isDepthTexture?X.type:null,W=y(g.stencilBuffer,j),_e=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),W,g.width,g.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,T)}else{const X=g.textures;for(let j=0;j<X.length;j++){const W=X[j],_e=r.convert(W.format,W.colorSpace),se=r.convert(W.type),ye=b(W.internalFormat,_e,se,W.colorSpace);ut(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),ye,g.width,g.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),ye,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ye,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(T,g,D){const X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ee(i.TEXTURE_CUBE_MAP,g.depthTexture);const Ce=r.convert(g.depthTexture.format),Q=r.convert(g.depthTexture.type);let ce;g.depthTexture.format===Sn?ce=i.DEPTH_COMPONENT24:g.depthTexture.format===Hn&&(ce=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,g.width,g.height,0,Ce,Q,null)}}else q(g.depthTexture,0);const W=j.__webglTexture,_e=C(g),se=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,ye=g.depthTexture.format===Hn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Sn)ut(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,se,W,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ye,se,W,0);else if(g.depthTexture.format===Hn)ut(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,se,W,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ye,se,W,0);else throw new Error("Unknown depthTexture format")}function ke(T){const g=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=X}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)me(g.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?me(g.__webglFramebuffer[0],T,0):me(g.__webglFramebuffer,T,0)}else if(D){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),we(g.__webglDepthbuffer[X],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),we(g.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,g,D){const X=n.get(T);g!==void 0&&le(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&ke(T)}function Le(T){const g=T.texture,D=n.get(T),X=n.get(g);T.addEventListener("dispose",R);const j=T.textures,W=T.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,a.memory.textures++),W){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let ye=0;ye<g.mipmaps.length;ye++)D.__webglFramebuffer[se][ye]=i.createFramebuffer()}else D.__webglFramebuffer[se]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)D.__webglFramebuffer[se]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(_e)for(let se=0,ye=j.length;se<ye;se++){const Ce=n.get(j[se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ut(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const ye=j[se];D.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[se]);const Ce=r.convert(ye.format,ye.colorSpace),Q=r.convert(ye.type),ce=b(ye.internalFormat,Ce,Q,ye.colorSpace,T.isXRRenderTarget===!0),Se=C(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,D.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),we(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ee(i.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)le(D.__webglFramebuffer[se][ye],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye);else le(D.__webglFramebuffer[se],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(g)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let se=0,ye=j.length;se<ye;se++){const Ce=j[se],Q=n.get(Ce);let ce=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),ee(ce,Ce),le(D.__webglFramebuffer,T,Ce,i.COLOR_ATTACHMENT0+se,ce,0),m(Ce)&&h(ce)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),ee(se,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)le(D.__webglFramebuffer[ye],T,g,i.COLOR_ATTACHMENT0,se,ye);else le(D.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,se,0);m(g)&&h(se),t.unbindTexture()}T.depthBuffer&&ke(T)}function We(T){const g=T.textures;for(let D=0,X=g.length;D<X;D++){const j=g[D];if(m(j)){const W=S(T),_e=n.get(j).__webglTexture;t.bindTexture(W,_e),h(W),t.unbindTexture()}}}const Ke=[],Ue=[];function tt(T){if(T.samples>0){if(ut(T)===!1){const g=T.textures,D=T.width,X=T.height;let j=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),se=g.length>1;if(se)for(let Ce=0;Ce<g.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const Q=n.get(g[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,D,X,0,0,D,X,j,i.NEAREST),l===!0&&(Ke.length=0,Ue.length=0,Ke.push(i.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ke.push(W),Ue.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ce=0;Ce<g.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const Q=n.get(g[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function C(T){return Math.min(s.maxSamples,T.samples)}function ut(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function $e(T){const g=a.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function nt(T,g){const D=T.colorSpace,X=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==pi&&D!==Rn&&(je.getTransfer(D)===et?(X!==Kt||j!==zt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",D)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=lt,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rp(i,e){function t(n,s=Rn){let r;const a=je.getTransfer(s);if(n===zt)return i.UNSIGNED_BYTE;if(n===ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ko)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oo)return i.BYTE;if(n===Bo)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===Qr)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Go)return i.ALPHA;if(n===Vo)return i.RGB;if(n===Kt)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===Hn)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===na)return i.RED_INTEGER;if(n===fi)return i.RG;if(n===ia)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===cs||n===ls||n===hs||n===ds)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mr||n===gr||n===_r||n===xr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vr||n===Mr||n===Sr||n===yr||n===Er||n===br||n===Tr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vr||n===Mr)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yr)return r.COMPRESSED_R11_EAC;if(n===Er)return r.COMPRESSED_SIGNED_R11_EAC;if(n===br)return r.COMPRESSED_RG11_EAC;if(n===Tr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ar||n===wr||n===Rr||n===Cr||n===Pr||n===Lr||n===Dr||n===Ir||n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===kr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ar)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ir)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ur)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Or)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Br)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zr||n===Gr||n===Vr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zr)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hr||n===Wr||n===Xr||n===qr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Cp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:Cp,fragmentShader:Pp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dp extends gi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new Lp,h={},S=t.getContextAttributes();let b=null,y=null;const A=[],w=[],R=new qe;let U=null;const v=new kt;v.viewport=new mt;const E=new kt;E.viewport=new mt;const P=[v,E],B=new kl;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=A[Y];return K===void 0&&(K=new qs,A[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=A[Y];return K===void 0&&(K=new qs,A[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=A[Y];return K===void 0&&(K=new qs,A[Y]=K),K.getHandSpace()};function q(Y){const K=w.indexOf(Y.inputSource);if(K===-1)return;const le=A[K];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||a),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let Y=0;Y<A.length;Y++){const K=w[Y];K!==null&&(w[Y]=null,A[Y].disconnect(K))}F=null,V=null,m.reset();for(const Y in h)delete h[Y];e.setRenderTarget(b),p=null,f=null,u=null,s=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,we=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?Hn:Sn,we=S.stencil?Pi:an);const ke={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new sn(f.textureWidth,f.textureHeight,{format:Kt,type:zt,depthTexture:new Di(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new sn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Y){for(let K=0;K<Y.removed.length;K++){const le=Y.removed[K],we=w.indexOf(le);we>=0&&(w[we]=null,A[we].disconnect(le))}for(let K=0;K<Y.added.length;K++){const le=Y.added[K];let we=w.indexOf(le);if(we===-1){for(let ke=0;ke<A.length;ke++)if(ke>=w.length){w.push(le),we=ke;break}else if(w[ke]===null){w[ke]=le,we=ke;break}if(we===-1)break}const me=A[we];me&&me.connect(le)}}const $=new O,ie=new O;function ne(Y,K,le){$.setFromMatrixPosition(K.matrixWorld),ie.setFromMatrixPosition(le.matrixWorld);const we=$.distanceTo(ie),me=K.projectionMatrix.elements,ke=le.projectionMatrix.elements,lt=me[14]/(me[10]-1),Le=me[14]/(me[10]+1),We=(me[9]+1)/me[5],Ke=(me[9]-1)/me[5],Ue=(me[8]-1)/me[0],tt=(ke[8]+1)/ke[0],C=lt*Ue,ut=lt*tt,$e=we/(-Ue+tt),nt=$e*-Ue;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(nt),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),me[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Me=lt+$e,T=Le+$e,g=C-nt,D=ut+(we-nt),X=We*Le/T*Me,j=Ke*Le/T*Me;Y.projectionMatrix.makePerspective(g,D,X,j,Me,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let K=Y.near,le=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(le=m.depthFar)),B.near=E.near=v.near=K,B.far=E.far=v.far=le,(F!==B.near||V!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,V=B.far),B.layers.mask=Y.layers.mask|6,v.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const we=Y.parent,me=B.cameras;ae(B,we);for(let ke=0;ke<me.length;ke++)ae(me[ke],we);me.length===2?ne(B,v,E):B.projectionMatrix.copy(v.projectionMatrix),ee(Y,B,we)};function ee(Y,K,le){le===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return h[Y]};let Pe=null;function Fe(Y,K){if(d=K.getViewerPose(c||a),_=K,d!==null){const le=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let we=!1;le.length!==B.cameras.length&&(B.cameras.length=0,we=!0);for(let Le=0;Le<le.length;Le++){const We=le[Le];let Ke=null;if(p!==null)Ke=p.getViewport(We);else{const tt=u.getViewSubImage(f,We);Ke=tt.viewport,Le===0&&(e.setRenderTargetTextures(y,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(y))}let Ue=P[Le];Ue===void 0&&(Ue=new kt,Ue.layers.enable(Le),Ue.viewport=new mt,P[Le]=Ue),Ue.matrix.fromArray(We.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(We.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Le===0&&(B.matrix.copy(Ue.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),we===!0&&B.cameras.push(Ue)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Le=u.getDepthInformation(le[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Le=0;Le<le.length;Le++){const We=le[Le].camera;if(We){let Ke=h[We];Ke||(Ke=new tc,h[We]=Ke);const Ue=u.getCameraImage(We);Ke.sourceTexture=Ue}}}}for(let le=0;le<A.length;le++){const we=w[le],me=A[le];we!==null&&me!==void 0&&me.update(we,K,c||a)}Pe&&Pe(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const Ve=new ic;Ve.setAnimationLoop(Fe),this.setAnimationLoop=function(Y){Pe=Y},this.dispose=function(){}}}const Bn=new on,Ip=new dt;function Up(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Zo(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,S,b,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,S,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===It&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===It&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,Bn.copy(y),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(Bn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Np(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const y=b.program;n.uniformBlockBinding(S,y)}function c(S,b){let y=s[S.id];y===void 0&&(_(S),y=d(S),s[S.id]=y,S.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(S,A);const w=e.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function d(S){const b=u();S.__bindingPointIndex=b;const y=i.createBuffer(),A=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=s[S.id],y=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=y.length;w<R;w++){const U=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,E=U.length;v<E;v++){const P=U[v];if(p(P,w,v,A)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<F.length;q++){const z=F[q],H=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+V,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,V),V+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,b,y,A){const w=S.value,R=b+"_"+y;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const U=A[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return A[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(S){const b=S.uniforms;let y=0;const A=16;for(let R=0,U=b.length;R<U;R++){const v=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,P=v.length;E<P;E++){const B=v[E],F=Array.isArray(B.value)?B.value:[B.value];for(let V=0,q=F.length;V<q;V++){const z=F[V],H=x(z),$=y%A,ie=$%H.boundary,ne=$+ie;y+=ie,ne!==0&&A-ne<H.storage&&(y+=A-ne),B.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=H.storage}}}const w=y%A;return w>0&&(y+=A-w),S.__size=y,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}const Fp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jt=null;function Op(){return Jt===null&&(Jt=new wl(Fp,16,16,fi,Mn),Jt.name="DFG_LUT",Jt.minFilter=_t,Jt.magFilter=_t,Jt.wrapS=mn,Jt.wrapT=mn,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class Bp{constructor(e={}){const{canvas:t=el(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=zt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const x=p,m=new Set([sa,ia,na]),h=new Set([zt,an,Ci,Pi,ea,ta]),S=new Uint32Array(4),b=new Int32Array(4);let y=null,A=null;const w=[],R=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Ht;let P=0,B=0,F=null,V=-1,q=null;const z=new mt,H=new mt;let $=null;const ie=new Xe(0);let ne=0,ae=t.width,ee=t.height,Pe=1,Fe=null,Ve=null;const Y=new mt(0,0,ae,ee),K=new mt(0,0,ae,ee);let le=!1;const we=new da;let me=!1,ke=!1;const lt=new dt,Le=new O,We=new mt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function tt(){return F===null?Pe:1}let C=n;function ut(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Je,!1),C===null){const I="webgl2";if(C=ut(I,M),C===null)throw ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ye("WebGLRenderer: "+M.message),M}let $e,nt,Me,T,g,D,X,j,W,_e,se,ye,Ce,Q,ce,Se,Ee,oe,ze,L,fe,te,pe,J;function Z(){$e=new Fu(C),$e.init(),te=new Rp(C,$e),nt=new wu(C,$e,e,te),Me=new Ap(C,$e),nt.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),T=new ku(C),g=new dp,D=new wp(C,$e,Me,g,nt,te,T),X=new Cu(v),j=new Nu(v),W=new Hl(C),pe=new Tu(C,W),_e=new Ou(C,W,T,pe),se=new Gu(C,_e,W,T),ze=new zu(C,nt,D),Se=new Ru(g),ye=new hp(v,X,j,$e,nt,pe,Se),Ce=new Up(v,g),Q=new fp,ce=new vp($e),oe=new bu(v,X,j,Me,se,_,l),Ee=new bp(v,se,nt),J=new Np(C,T,nt,Me),L=new Au(C,$e,T),fe=new Bu(C,$e,T),T.programs=ye.programs,v.capabilities=nt,v.extensions=$e,v.properties=g,v.renderLists=Q,v.shadowMap=Ee,v.state=Me,v.info=T}Z(),x!==zt&&(U=new Hu(x,t.width,t.height,s,r));const re=new Dp(v,C);this.xr=re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(M){M!==void 0&&(Pe=M,this.setSize(ae,ee,!1))},this.getSize=function(M){return M.set(ae,ee)},this.setSize=function(M,I,G=!0){if(re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=M,ee=I,t.width=Math.floor(M*Pe),t.height=Math.floor(I*Pe),G===!0&&(t.style.width=M+"px",t.style.height=I+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(ae*Pe,ee*Pe).floor()},this.setDrawingBufferSize=function(M,I,G){ae=M,ee=I,Pe=G,t.width=Math.floor(M*G),t.height=Math.floor(I*G),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(x===zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,I,G,k){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,I,G,k),Me.viewport(z.copy(Y).multiplyScalar(Pe).round())},this.getScissor=function(M){return M.copy(K)},this.setScissor=function(M,I,G,k){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,I,G,k),Me.scissor(H.copy(K).multiplyScalar(Pe).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){Me.setScissorTest(le=M)},this.setOpaqueSort=function(M){Fe=M},this.setTransparentSort=function(M){Ve=M},this.getClearColor=function(M){return M.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,G=!0){let k=0;if(M){let N=!1;if(F!==null){const he=F.texture.format;N=m.has(he)}if(N){const he=F.texture.type,ge=h.has(he),ue=oe.getClearColor(),xe=oe.getClearAlpha(),be=ue.r,Re=ue.g,Te=ue.b;ge?(S[0]=be,S[1]=Re,S[2]=Te,S[3]=xe,C.clearBufferuiv(C.COLOR,0,S)):(b[0]=be,b[1]=Re,b[2]=Te,b[3]=xe,C.clearBufferiv(C.COLOR,0,b))}else k|=C.COLOR_BUFFER_BIT}I&&(k|=C.DEPTH_BUFFER_BIT),G&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),oe.dispose(),Q.dispose(),ce.dispose(),g.dispose(),X.dispose(),j.dispose(),se.dispose(),pe.dispose(),J.dispose(),ye.dispose(),re.dispose(),re.removeEventListener("sessionstart",ga),re.removeEventListener("sessionend",_a),Ln.stop()};function De(M){M.preventDefault(),Ia("WebGLRenderer: Context Lost."),E=!0}function at(){Ia("WebGLRenderer: Context Restored."),E=!1;const M=T.autoReset,I=Ee.enabled,G=Ee.autoUpdate,k=Ee.needsUpdate,N=Ee.type;Z(),T.autoReset=M,Ee.enabled=I,Ee.autoUpdate=G,Ee.needsUpdate=k,Ee.type=N}function Je(M){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Zt(M){const I=M.target;I.removeEventListener("dispose",Zt),ln(I)}function ln(M){uc(M),g.remove(M)}function uc(M){const I=g.get(M).programs;I!==void 0&&(I.forEach(function(G){ye.releaseProgram(G)}),M.isShaderMaterial&&ye.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,G,k,N,he){I===null&&(I=Ke);const ge=N.isMesh&&N.matrixWorld.determinant()<0,ue=pc(M,I,G,k,N);Me.setMaterial(k,ge);let xe=G.index,be=1;if(k.wireframe===!0){if(xe=_e.getWireframeAttribute(G),xe===void 0)return;be=2}const Re=G.drawRange,Te=G.attributes.position;let Ge=Re.start*be,it=(Re.start+Re.count)*be;he!==null&&(Ge=Math.max(Ge,he.start*be),it=Math.min(it,(he.start+he.count)*be)),xe!==null?(Ge=Math.max(Ge,0),it=Math.min(it,xe.count)):Te!=null&&(Ge=Math.max(Ge,0),it=Math.min(it,Te.count));const ft=it-Ge;if(ft<0||ft===1/0)return;pe.setup(N,k,ue,G,xe);let pt,st=L;if(xe!==null&&(pt=W.get(xe),st=fe,st.setIndex(pt)),N.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*tt()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(N.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),Me.setLineWidth(Ae*tt()),N.isLineSegments?st.setMode(C.LINES):N.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else N.isPoints?st.setMode(C.POINTS):N.isSprite&&st.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Li("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,Qe=N._multiDrawCounts,Ze=N._multiDrawCount,Nt=xe?W.get(xe).bytesPerElement:1,qn=g.get(k).currentProgram.getUniforms();for(let Ft=0;Ft<Ze;Ft++)qn.setValue(C,"_gl_DrawID",Ft),st.render(Ae[Ft]/Nt,Qe[Ft])}else if(N.isInstancedMesh)st.renderInstances(Ge,ft,N.count);else if(G.isInstancedBufferGeometry){const Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Qe=Math.min(G.instanceCount,Ae);st.renderInstances(Ge,ft,Qe)}else st.render(Ge,ft)};function ma(M,I,G){M.transparent===!0&&M.side===yt&&M.forceSinglePass===!1?(M.side=It,M.needsUpdate=!0,zi(M,I,G),M.side=vn,M.needsUpdate=!0,zi(M,I,G),M.side=yt):zi(M,I,G)}this.compile=function(M,I,G=null){G===null&&(G=M),A=ce.get(G),A.init(I),R.push(A),G.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),M!==G&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),A.setupLights();const k=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const he=N.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const ue=he[ge];ma(ue,G,N),k.add(ue)}else ma(he,G,N),k.add(he)}),A=R.pop(),k},this.compileAsync=function(M,I,G=null){const k=this.compile(M,I,G);return new Promise(N=>{function he(){if(k.forEach(function(ge){g.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){N(M);return}setTimeout(he,10)}$e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ms=null;function fc(M){Ms&&Ms(M)}function ga(){Ln.stop()}function _a(){Ln.start()}const Ln=new ic;Ln.setAnimationLoop(fc),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(M){Ms=M,re.setAnimationLoop(M),M===null?Ln.stop():Ln.start()},re.addEventListener("sessionstart",ga),re.addEventListener("sessionend",_a),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const G=re.enabled===!0&&re.isPresenting===!0,k=U!==null&&(F===null||G)&&U.begin(v,F);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,I,F),A=ce.get(M,R.length),A.init(I),R.push(A),lt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),we.setFromProjectionMatrix(lt,tn,I.reversedDepth),ke=this.localClippingEnabled,me=Se.init(this.clippingPlanes,ke),y=Q.get(M,w.length),y.init(),w.push(y),re.enabled===!0&&re.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&Ss(ge,I,-1/0,v.sortObjects)}Ss(M,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Fe,Ve),Ue=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ue&&oe.addToRenderList(y,M),this.info.render.frame++,me===!0&&Se.beginShadows();const N=A.state.shadowsArray;if(Ee.render(N,M,I),me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&U.hasRenderPass())===!1){const ge=y.opaque,ue=y.transmissive;if(A.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let be=0,Re=xe.length;be<Re;be++){const Te=xe[be];va(ge,ue,M,Te)}Ue&&oe.render(M);for(let be=0,Re=xe.length;be<Re;be++){const Te=xe[be];xa(y,M,Te,Te.viewport)}}else ue.length>0&&va(ge,ue,M,I),Ue&&oe.render(M),xa(y,M,I)}F!==null&&B===0&&(D.updateMultisampleRenderTarget(F),D.updateRenderTargetMipmap(F)),k&&U.end(v),M.isScene===!0&&M.onAfterRender(v,M,I),pe.resetDefaultState(),V=-1,q=null,R.pop(),R.length>0?(A=R[R.length-1],me===!0&&Se.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Ss(M,I,G,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||we.intersectsSprite(M)){k&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(lt);const ge=se.update(M),ue=M.material;ue.visible&&y.push(M,ge,ue,G,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||we.intersectsObject(M))){const ge=se.update(M),ue=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),We.copy(ge.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(lt)),Array.isArray(ue)){const xe=ge.groups;for(let be=0,Re=xe.length;be<Re;be++){const Te=xe[be],Ge=ue[Te.materialIndex];Ge&&Ge.visible&&y.push(M,ge,Ge,G,We.z,Te)}}else ue.visible&&y.push(M,ge,ue,G,We.z,null)}}const he=M.children;for(let ge=0,ue=he.length;ge<ue;ge++)Ss(he[ge],I,G,k)}function xa(M,I,G,k){const{opaque:N,transmissive:he,transparent:ge}=M;A.setupLightsView(G),me===!0&&Se.setGlobalState(v.clippingPlanes,G),k&&Me.viewport(z.copy(k)),N.length>0&&ki(N,I,G),he.length>0&&ki(he,I,G),ge.length>0&&ki(ge,I,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function va(M,I,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const Ge=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new sn(1,1,{generateMipmaps:!0,type:Ge?Mn:zt,minFilter:Vn,samples:nt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const he=A.state.transmissionRenderTarget[k.id],ge=k.viewport||z;he.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const ue=v.getRenderTarget(),xe=v.getActiveCubeFace(),be=v.getActiveMipmapLevel();v.setRenderTarget(he),v.getClearColor(ie),ne=v.getClearAlpha(),ne<1&&v.setClearColor(16777215,.5),v.clear(),Ue&&oe.render(G);const Re=v.toneMapping;v.toneMapping=nn;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),me===!0&&Se.setGlobalState(v.clippingPlanes,k),ki(M,G,k),D.updateMultisampleRenderTarget(he),D.updateRenderTargetMipmap(he),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let it=0,ft=I.length;it<ft;it++){const pt=I[it],{object:st,geometry:Ae,material:Qe,group:Ze}=pt;if(Qe.side===yt&&st.layers.test(k.layers)){const Nt=Qe.side;Qe.side=It,Qe.needsUpdate=!0,Ma(st,G,k,Ae,Qe,Ze),Qe.side=Nt,Qe.needsUpdate=!0,Ge=!0}}Ge===!0&&(D.updateMultisampleRenderTarget(he),D.updateRenderTargetMipmap(he))}v.setRenderTarget(ue,xe,be),v.setClearColor(ie,ne),Te!==void 0&&(k.viewport=Te),v.toneMapping=Re}function ki(M,I,G){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,he=M.length;N<he;N++){const ge=M[N],{object:ue,geometry:xe,group:be}=ge;let Re=ge.material;Re.allowOverride===!0&&k!==null&&(Re=k),ue.layers.test(G.layers)&&Ma(ue,I,G,xe,Re,be)}}function Ma(M,I,G,k,N,he){M.onBeforeRender(v,I,G,k,N,he),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(v,I,G,k,M,he),N.transparent===!0&&N.side===yt&&N.forceSinglePass===!1?(N.side=It,N.needsUpdate=!0,v.renderBufferDirect(G,I,k,N,M,he),N.side=vn,N.needsUpdate=!0,v.renderBufferDirect(G,I,k,N,M,he),N.side=yt):v.renderBufferDirect(G,I,k,N,M,he),M.onAfterRender(v,I,G,k,N,he)}function zi(M,I,G){I.isScene!==!0&&(I=Ke);const k=g.get(M),N=A.state.lights,he=A.state.shadowsArray,ge=N.state.version,ue=ye.getParameters(M,N.state,he,I,G),xe=ye.getProgramCacheKey(ue);let be=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?j:X).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,be===void 0&&(M.addEventListener("dispose",Zt),be=new Map,k.programs=be);let Re=be.get(xe);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===ge)return ya(M,ue),Re}else ue.uniforms=ye.getUniforms(M),M.onBeforeCompile(ue,v),Re=ye.acquireProgram(ue,xe),be.set(xe,Re),k.uniforms=ue.uniforms;const Te=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=Se.uniform),ya(M,ue),k.needsLights=gc(M),k.lightsStateVersion=ge,k.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function Sa(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=us.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function ya(M,I){const G=g.get(M);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function pc(M,I,G,k,N){I.isScene!==!0&&(I=Ke),D.resetTextureUnits();const he=I.fog,ge=k.isMeshStandardMaterial?I.environment:null,ue=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pi,xe=(k.isMeshStandardMaterial?j:X).get(k.envMap||ge),be=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!G.morphAttributes.position,Ge=!!G.morphAttributes.normal,it=!!G.morphAttributes.color;let ft=nn;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ft=v.toneMapping);const pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=pt!==void 0?pt.length:0,Ae=g.get(k),Qe=A.state.lights;if(me===!0&&(ke===!0||M!==q)){const Rt=M===q&&k.id===V;Se.setState(k,M,Rt)}let Ze=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Qe.state.version||Ae.outputColorSpace!==ue||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==xe||k.fog===!0&&Ae.fog!==he||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Se.numPlanes||Ae.numIntersection!==Se.numIntersection)||Ae.vertexAlphas!==be||Ae.vertexTangents!==Re||Ae.morphTargets!==Te||Ae.morphNormals!==Ge||Ae.morphColors!==it||Ae.toneMapping!==ft||Ae.morphTargetsCount!==st)&&(Ze=!0):(Ze=!0,Ae.__version=k.version);let Nt=Ae.currentProgram;Ze===!0&&(Nt=zi(k,I,N));let qn=!1,Ft=!1,xi=!1;const ot=Nt.getUniforms(),Pt=Ae.uniforms;if(Me.useProgram(Nt.program)&&(qn=!0,Ft=!0,xi=!0),k.id!==V&&(V=k.id,Ft=!0),qn||q!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ot.setValue(C,"projectionMatrix",M.projectionMatrix),ot.setValue(C,"viewMatrix",M.matrixWorldInverse);const Lt=ot.map.cameraPosition;Lt!==void 0&&Lt.setValue(C,Le.setFromMatrixPosition(M.matrixWorld)),nt.logarithmicDepthBuffer&&ot.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Ft=!0,xi=!0)}if(Ae.needsLights&&(Qe.state.directionalShadowMap.length>0&&ot.setValue(C,"directionalShadowMap",Qe.state.directionalShadowMap,D),Qe.state.spotShadowMap.length>0&&ot.setValue(C,"spotShadowMap",Qe.state.spotShadowMap,D),Qe.state.pointShadowMap.length>0&&ot.setValue(C,"pointShadowMap",Qe.state.pointShadowMap,D)),N.isSkinnedMesh){ot.setOptional(C,N,"bindMatrix"),ot.setOptional(C,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ot.setValue(C,"boneTexture",Rt.boneTexture,D))}N.isBatchedMesh&&(ot.setOptional(C,N,"batchingTexture"),ot.setValue(C,"batchingTexture",N._matricesTexture,D),ot.setOptional(C,N,"batchingIdTexture"),ot.setValue(C,"batchingIdTexture",N._indirectTexture,D),ot.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ot.setValue(C,"batchingColorTexture",N._colorsTexture,D));const Gt=G.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&ze.update(N,G,Nt),(Ft||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,ot.setValue(C,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Pt.envMap.value=xe,Pt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Pt.envMapIntensity.value=I.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Op()),Ft&&(ot.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&mc(Pt,xi),he&&k.fog===!0&&Ce.refreshFogUniforms(Pt,he),Ce.refreshMaterialUniforms(Pt,k,Pe,ee,A.state.transmissionRenderTarget[M.id]),us.upload(C,Sa(Ae),Pt,D)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(us.upload(C,Sa(Ae),Pt,D),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(C,"center",N.center),ot.setValue(C,"modelViewMatrix",N.modelViewMatrix),ot.setValue(C,"normalMatrix",N.normalMatrix),ot.setValue(C,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rt=k.uniformsGroups;for(let Lt=0,ys=Rt.length;Lt<ys;Lt++){const Dn=Rt[Lt];J.update(Dn,Nt),J.bind(Dn,Nt)}}return Nt}function mc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function gc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,I,G){const k=g.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=I,g.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const G=g.get(M);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const _c=C.createFramebuffer();this.setRenderTarget=function(M,I=0,G=0){F=M,P=I,B=G;let k=null,N=!1,he=!1;if(M){const ue=g.get(M);if(ue.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(C.FRAMEBUFFER,ue.__webglFramebuffer),z.copy(M.viewport),H.copy(M.scissor),$=M.scissorTest,Me.viewport(z),Me.scissor(H),Me.setScissorTest($),V=-1;return}else if(ue.__webglFramebuffer===void 0)D.setupRenderTarget(M);else if(ue.__hasExternalTextures)D.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(ue.__boundDepthTexture!==Re){if(Re!==null&&g.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(M)}}const xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const be=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(be[I])?k=be[I][G]:k=be[I],N=!0):M.samples>0&&D.useMultisampledRTT(M)===!1?k=g.get(M).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[G]:k=be,z.copy(M.viewport),H.copy(M.scissor),$=M.scissorTest}else z.copy(Y).multiplyScalar(Pe).floor(),H.copy(K).multiplyScalar(Pe).floor(),$=le;if(G!==0&&(k=_c),Me.bindFramebuffer(C.FRAMEBUFFER,k)&&Me.drawBuffers(M,k),Me.viewport(z),Me.scissor(H),Me.setScissorTest($),N){const ue=g.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,G)}else if(he){const ue=I;for(let xe=0;xe<M.textures.length;xe++){const be=g.get(M.textures[xe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+xe,be.__webglTexture,G,ue)}}else if(M!==null&&G!==0){const ue=g.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ue.__webglTexture,G)}V=-1},this.readRenderTargetPixels=function(M,I,G,k,N,he,ge,ue=0){if(!(M&&M.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){Me.bindFramebuffer(C.FRAMEBUFFER,xe);try{const be=M.textures[ue],Re=be.format,Te=be.type;if(!nt.textureFormatReadable(Re)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Te)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&G>=0&&G<=M.height-N&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ue),C.readPixels(I,G,k,N,te.convert(Re),te.convert(Te),he))}finally{const be=F!==null?g.get(F).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(M,I,G,k,N,he,ge,ue=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(I>=0&&I<=M.width-k&&G>=0&&G<=M.height-N){Me.bindFramebuffer(C.FRAMEBUFFER,xe);const be=M.textures[ue],Re=be.format,Te=be.type;if(!nt.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.bufferData(C.PIXEL_PACK_BUFFER,he.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ue),C.readPixels(I,G,k,N,te.convert(Re),te.convert(Te),0);const it=F!==null?g.get(F).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,it);const ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await tl(C,ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,he),C.deleteBuffer(Ge),C.deleteSync(ft),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,G=0){const k=Math.pow(2,-G),N=Math.floor(M.image.width*k),he=Math.floor(M.image.height*k),ge=I!==null?I.x:0,ue=I!==null?I.y:0;D.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,ge,ue,N,he),Me.unbindTexture()};const xc=C.createFramebuffer(),vc=C.createFramebuffer();this.copyTextureToTexture=function(M,I,G=null,k=null,N=0,he=null){he===null&&(N!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=N,N=0):he=0);let ge,ue,xe,be,Re,Te,Ge,it,ft;const pt=M.isCompressedTexture?M.mipmaps[he]:M.image;if(G!==null)ge=G.max.x-G.min.x,ue=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Re=G.min.y,Te=G.isBox3?G.min.z:0;else{const Gt=Math.pow(2,-N);ge=Math.floor(pt.width*Gt),ue=Math.floor(pt.height*Gt),M.isDataArrayTexture?xe=pt.depth:M.isData3DTexture?xe=Math.floor(pt.depth*Gt):xe=1,be=0,Re=0,Te=0}k!==null?(Ge=k.x,it=k.y,ft=k.z):(Ge=0,it=0,ft=0);const st=te.convert(I.format),Ae=te.convert(I.type);let Qe;I.isData3DTexture?(D.setTexture3D(I,0),Qe=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),Qe=C.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),Qe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const Ze=C.getParameter(C.UNPACK_ROW_LENGTH),Nt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ft=C.getParameter(C.UNPACK_SKIP_ROWS),xi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Re),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te);const ot=M.isDataArrayTexture||M.isData3DTexture,Pt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Gt=g.get(M),Rt=g.get(I),Lt=g.get(Gt.__renderTarget),ys=g.get(Rt.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,ys.__webglFramebuffer);for(let Dn=0;Dn<xe;Dn++)ot&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(M).__webglTexture,N,Te+Dn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(I).__webglTexture,he,ft+Dn)),C.blitFramebuffer(be,Re,ge,ue,Ge,it,ge,ue,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||g.has(M)){const Gt=g.get(M),Rt=g.get(I);Me.bindFramebuffer(C.READ_FRAMEBUFFER,xc),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,vc);for(let Lt=0;Lt<xe;Lt++)ot?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Gt.__webglTexture,N,Te+Lt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Gt.__webglTexture,N),Pt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.__webglTexture,he,ft+Lt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Rt.__webglTexture,he),N!==0?C.blitFramebuffer(be,Re,ge,ue,Ge,it,ge,ue,C.COLOR_BUFFER_BIT,C.NEAREST):Pt?C.copyTexSubImage3D(Qe,he,Ge,it,ft+Lt,be,Re,ge,ue):C.copyTexSubImage2D(Qe,he,Ge,it,be,Re,ge,ue);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Pt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Qe,he,Ge,it,ft,ge,ue,xe,st,Ae,pt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Qe,he,Ge,it,ft,ge,ue,xe,st,pt.data):C.texSubImage3D(Qe,he,Ge,it,ft,ge,ue,xe,st,Ae,pt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,he,Ge,it,ge,ue,st,Ae,pt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,he,Ge,it,pt.width,pt.height,st,pt.data):C.texSubImage2D(C.TEXTURE_2D,he,Ge,it,ge,ue,st,Ae,pt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xi),he===0&&I.generateMipmaps&&C.generateMipmap(Qe),Me.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&D.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){P=0,B=0,F=null,Me.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}let oi=null;function Bi(){if(!oi){const i=window.AudioContext||window.webkitAudioContext;i&&(oi=new i)}return oi&&oi.state==="suspended"&&oi.resume().catch(()=>{}),oi}function cc(){try{const i=Bi();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="sine",e.frequency.setValueAtTime(95+Math.random()*20,i.currentTime),e.frequency.exponentialRampToValueAtTime(35,i.currentTime+.08),t.gain.setValueAtTime(.06,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.08),e.connect(t),t.connect(i.destination),e.start(),e.stop(i.currentTime+.08)}catch{}}function lc(){try{const i=Bi();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="triangle",e.frequency.setValueAtTime(1850,i.currentTime),e.frequency.exponentialRampToValueAtTime(2450,i.currentTime+.12),t.gain.setValueAtTime(.18,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.28),e.connect(t),t.connect(i.destination),e.start(i.currentTime),e.stop(i.currentTime+.28),[523.25,659.25,783.99,1046.5].forEach((a,o)=>{const l=i.createOscillator(),c=i.createGain();l.type="sine",l.frequency.setValueAtTime(a,i.currentTime);const d=i.currentTime+o*.05;c.gain.setValueAtTime(0,d),c.gain.linearRampToValueAtTime(.16,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+.5),l.connect(c),c.connect(i.destination),l.start(d),l.stop(d+.55)});const s=i.createOscillator(),r=i.createGain();s.type="sine",s.frequency.setValueAtTime(110,i.currentTime+.12),s.frequency.exponentialRampToValueAtTime(42,i.currentTime+.45),r.gain.setValueAtTime(.26,i.currentTime+.12),r.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+.45),s.connect(r),r.connect(i.destination),s.start(i.currentTime+.12),s.stop(i.currentTime+.45)}catch{}}function kp(){try{const i=Bi();if(!i)return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const s=i.createOscillator(),r=i.createGain();s.type="triangle",s.frequency.setValueAtTime(t,i.currentTime);const a=i.currentTime+n*.055;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.18,a+.015),r.gain.exponentialRampToValueAtTime(1e-4,a+.45),s.connect(r),r.connect(i.destination),s.start(a),s.stop(a+.5)})}catch{}}function hc(){try{const i=Bi();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="triangle",e.frequency.setValueAtTime(440,i.currentTime),e.frequency.exponentialRampToValueAtTime(880,i.currentTime+.15),t.gain.setValueAtTime(.08,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.18),e.connect(t),t.connect(i.destination),e.start(),e.stop(i.currentTime+.18)}catch{}}function dc(){try{const i=Bi();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="sine",e.frequency.setValueAtTime(600,i.currentTime),e.frequency.exponentialRampToValueAtTime(150,i.currentTime+.25),t.gain.setValueAtTime(.12,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.25),e.connect(t),t.connect(i.destination),e.start(),e.stop(i.currentTime+.25)}catch{}}const Zr=Object.freeze(Object.defineProperty({__proto__:null,playCabinetExit:dc,playCabinetHighlight:hc,playCoinDrop:lc,playDopamineChime:kp,playFootstep:cc},Symbol.toStringTag,{value:"Module"}));class zp{constructor(e){this.scene=e,this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetRotation=Math.PI,this.speed=7.5,this.radius=.45,this.isMoving=!1,this.walkCycle=0,this.footstepTimer=0,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.joystickVector={x:0,y:0},this.navTarget=null,this.createAvatarMesh(),this.bindKeyboard()}setNavigationTarget(e,t,n=null){this.navTarget={x:e,z:t,onArrival:n}}clearNavigationTarget(){this.navTarget=null}createAvatarMesh(){this.group=new gn,this.group.position.set(this.x,this.y,this.z);const e=new $t(.38,.32,.8,16),t=new St({color:62975,roughness:.3,metalness:.2});this.torso=new ve(e,t),this.torso.position.y=.85,this.group.add(this.torso);const n=new rt(.04,.78,.05),s=new ct({color:16711807}),r=new ve(n,s);r.position.set(0,.85,.35),this.group.add(r);const a=new Ii(.42,24,24),o=new St({color:16777215,roughness:.2,metalness:.1});this.head=new ve(a,o),this.head.position.y=1.55,this.group.add(this.head),this.visorCanvas=document.createElement("canvas"),this.visorCanvas.width=256,this.visorCanvas.height=128,this.visorCtx=this.visorCanvas.getContext("2d"),this.renderVisorEyes(!1),this.visorTex=new Xn(this.visorCanvas),this.visorTex.needsUpdate=!0;const l=new ct({map:this.visorTex,transparent:!0}),c=new $t(.43,.43,.3,16,1,!1,Math.PI*.15,Math.PI*.7);this.visorMesh=new ve(c,l),this.visorMesh.position.set(0,1.55,.02),this.visorMesh.rotation.y=-Math.PI/2,this.group.add(this.visorMesh);const d=new rt(.42,.5,.22),u=new St({color:1712440,roughness:.4,metalness:.6}),f=new ve(d,u);f.position.set(0,.9,-.36),this.group.add(f);const p=new $t(.06,.04,.12,12),_=new ct({color:62975}),x=new ve(p,_);x.position.set(-.12,.6,-.36);const m=new ve(p,_);m.position.set(.12,.6,-.36),this.group.add(x),this.group.add(m);const h=new Ii(.14,12,12),S=new St({color:16711807,roughness:.3});this.leftFoot=new ve(h,S),this.leftFoot.position.set(-.2,.14,0),this.group.add(this.leftFoot),this.rightFoot=new ve(h,S),this.rightFoot.position.set(.2,.14,0),this.group.add(this.rightFoot);const b=new ua(.55,24),y=new ct({color:0,transparent:!0,opacity:.45}),A=new ve(b,y);A.rotation.x=-Math.PI/2,A.position.y=.02,this.group.add(A),this.scene.add(this.group)}renderVisorEyes(e){const t=this.visorCtx;t.clearRect(0,0,256,128),t.fillStyle="#060814",t.fillRect(0,0,256,128),t.fillStyle="#00f5ff",t.shadowColor="#00f5ff",t.shadowBlur=12,e?(t.lineWidth=6,t.strokeStyle="#00f5ff",t.beginPath(),t.arc(85,64,22,.2,Math.PI-.2,!1),t.stroke(),t.beginPath(),t.arc(171,64,22,.2,Math.PI-.2,!1),t.stroke()):(t.beginPath(),t.ellipse(85,60,20,26,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(171,60,20,26,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.shadowBlur=0,t.beginPath(),t.arc(90,52,7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(176,52,7,0,Math.PI*2),t.fill())}resetMovement(){this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.joystickVector.x=0,this.joystickVector.y=0,this.isMoving=!1}bindKeyboard(){window.addEventListener("keydown",e=>{var t,n,s;if(!["INPUT","TEXTAREA"].includes((t=document.activeElement)==null?void 0:t.tagName)){if(window.__arcadeOverlayOpen||((n=document.getElementById("arcade-game-overlay"))==null?void 0:n.style.display)!=="none"){this.resetMovement();return}if(((s=document.getElementById("arcade-jukebox-modal"))==null?void 0:s.style.display)!=="none"){this.resetMovement();return}switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break}}}),window.addEventListener("keyup",e=>{var t;if(window.__arcadeOverlayOpen||((t=document.getElementById("arcade-game-overlay"))==null?void 0:t.style.display)!=="none"){this.resetMovement();return}switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break}})}setJoystickVector(e,t){this.joystickVector.x=e,this.joystickVector.y=t}update(e,t,n){let s=0,r=0;if(this.keys.forward&&(r-=1),this.keys.backward&&(r+=1),this.keys.left&&(s-=1),this.keys.right&&(s+=1),(Math.abs(this.joystickVector.x)>.1||Math.abs(this.joystickVector.y)>.1)&&(s+=this.joystickVector.x,r+=this.joystickVector.y),Math.hypot(s,r)>.01)this.navTarget=null;else if(this.navTarget){const u=this.navTarget.x-this.x,f=this.navTarget.z-this.z,p=Math.hypot(u,f);if(p<.35){const _=this.navTarget.onArrival;this.navTarget=null,_&&_()}else s=u/p,r=f/p}const o=Math.hypot(s,r);if(o>.01){s/=o,r/=o,this.isMoving=!0,this.targetRotation=Math.atan2(s,r);const u=this.speed*e;let f=this.x+s*u,p=this.z+r*u;f=Math.max(t.minX+this.radius,Math.min(t.maxX-this.radius,f)),p=Math.max(t.minZ+this.radius,Math.min(t.maxZ-this.radius,p));for(const _ of n){const x=_.collisionBox,m=Math.max(x.minX,Math.min(f,x.maxX)),h=Math.max(x.minZ,Math.min(p,x.maxZ));let S=f-m,b=p-h;const y=S*S+b*b;if(y<this.radius*this.radius){const A=Math.sqrt(y);if(A>1e-4){const w=this.radius-A;f+=S/A*w,p+=b/A*w}else p+=this.radius}}this.x=f,this.z=p,this.walkCycle+=e*14,this.footstepTimer+=e,this.footstepTimer>.28&&(cc(),this.footstepTimer=0)}else this.isMoving=!1,this.walkCycle=0;let l=this.targetRotation-this.rotation;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;this.rotation+=l*.25,this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.rotation,this.isMoving?(this.leftFoot.position.z=Math.sin(this.walkCycle)*.22,this.rightFoot.position.z=-Math.sin(this.walkCycle)*.22,this.torso.rotation.z=0):(this.leftFoot.position.z=0,this.rightFoot.position.z=0,this.torso.rotation.z=0);const c=performance.now()*.001,d=Math.sin(c*1.5)>.94;this.lastBlinkState!==d&&(this.lastBlinkState=d,this.renderVisorEyes(d),this.visorTex.needsUpdate=!0)}}const Ao=[{primary:62975,secondary:7940298,accent:16711807},{primary:16711807,secondary:62975,accent:16765738},{primary:393121,secondary:62975,accent:16711807},{primary:16765738,secondary:16711807,accent:62975},{primary:7940298,secondary:62975,accent:393121}];function Gp(i,e){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,512,128);s.addColorStop(0,"#0a0d24"),s.addColorStop(.5,"#191f48"),s.addColorStop(1,"#0a0d24"),n.fillStyle=s,n.fillRect(0,0,512,128),n.strokeStyle="#"+e.secondary.toString(16).padStart(6,"0"),n.lineWidth=4,n.strokeRect(6,6,500,116),n.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),n.lineWidth=2,n.strokeRect(12,12,488,104),n.fillStyle="#ffffff",n.font='bold 36px "Segoe UI", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),n.shadowBlur=15;const r=`${i.icon||"🎮"} ${(i.name||"ARCADE").toUpperCase()}`;n.fillText(r,256,54),n.font="bold 16px monospace",n.fillStyle="#"+e.accent.toString(16).padStart(6,"0"),n.shadowBlur=8,n.fillText(`• ${i.category?i.category.toUpperCase():"CLASSIC ARCADE"} •`,256,96);const a=new Xn(t);return a.minFilter=_t,a.needsUpdate=!0,a}function Vp(i,e){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=(i.category||"").toLowerCase(),r=(i.id||"").toLowerCase(),a=s==="sports"||r.includes("gear")||r.includes("fzero")||r.includes("outrun")||r.includes("racer")||r.includes("runner"),o=s==="action"||r.includes("slug")||r.includes("fighter")||r.includes("mk2")||r.includes("sor2")||r.includes("shuriken")||r.includes("katana"),l=r.includes("pacman"),c=u=>{if(n.fillStyle="#060a1e",n.fillRect(0,0,512,512),a){const p=n.createLinearGradient(0,0,0,260);p.addColorStop(0,"#0d0826"),p.addColorStop(1,"#3b1443"),n.fillStyle=p,n.fillRect(0,0,512,260),n.fillStyle="#ff007f",n.beginPath(),n.moveTo(0,260),n.lineTo(80,210),n.lineTo(160,260),n.lineTo(260,190),n.lineTo(370,260),n.lineTo(440,220),n.lineTo(512,260),n.fill(),n.fillStyle="#111322",n.fillRect(0,260,512,252);const _=u*260;for(let m=0;m<7;m++){const h=(m*38+_)%252,S=260+h,b=40+h/252*220;n.fillStyle=Math.floor((h+_*.2)/36)%2===0?"#ff007f":"#00f5ff",n.fillRect(256-b/2,S,b,8+h/252*8)}n.fillStyle="#ffd32a",n.shadowColor="#ffd32a",n.shadowBlur=12;const x=256+Math.sin(u*3)*60;n.fillRect(x-22,430,44,24),n.fillStyle="#ff007f",n.fillRect(x-16,444,32,8),n.shadowBlur=0}else if(o){n.strokeStyle="rgba(255, 0, 127, 0.25)",n.lineWidth=2;for(let x=0;x<512;x+=40)n.beginPath(),n.moveTo(x,0),n.lineTo(x,512),n.stroke();n.fillStyle="rgba(0, 0, 0, 0.7)",n.fillRect(30,80,200,20),n.fillRect(282,80,200,20);const p=190-(Math.sin(u*2)*.5+.5)*60,_=190-(Math.cos(u*2.5)*.5+.5)*80;n.fillStyle="#05ffa1",n.fillRect(35,84,p,12),n.fillStyle="#ff007f",n.fillRect(287,84,_,12),n.font='bold 22px "Press Start 2P", monospace',n.fillStyle="#ffd32a",n.textAlign="center",n.shadowColor="#ffd32a",n.shadowBlur=10,n.fillText(Math.floor(u*3)%2===0?"FIGHT!":"VS",256,96),n.shadowBlur=0}else if(l){n.strokeStyle="#0066ff",n.lineWidth=4,n.strokeRect(50,80,412,140),n.strokeRect(100,120,120,60),n.strokeRect(292,120,120,60),n.fillStyle="#ffb8ae";for(let x=80;x<=430;x+=32)n.beginPath(),n.arc(x,100,4,0,Math.PI*2),n.fill();const p=70+u*90%360,_=(Math.sin(u*18)*.5+.5)*.35;n.fillStyle="#ffd32a",n.beginPath(),n.arc(p,100,16,_*Math.PI,(2-_)*Math.PI),n.lineTo(p,100),n.fill()}else{n.strokeStyle="rgba(0, 245, 255, 0.2)",n.lineWidth=2;const p=u*30%32;for(let _=p;_<512;_+=32)n.beginPath(),n.moveTo(0,_),n.lineTo(512,_),n.stroke();for(let _=0;_<512;_+=32)n.beginPath(),n.moveTo(_,0),n.lineTo(_,512),n.stroke()}n.fillStyle="rgba(255, 0, 127, 0.4)",n.fillRect(100,24,312,34),n.strokeStyle="#ff007f",n.lineWidth=2,n.strokeRect(100,24,312,34),n.fillStyle="#ffffff",n.font='bold 15px "Press Start 2P", monospace, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText("★ ARCADE CLASSIC ★",256,41);const f=1+Math.sin(u*4)*.1;n.save(),n.translate(256,185),n.scale(f,f),n.font="72px sans-serif",n.textAlign="center",n.textBaseline="middle",n.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),n.shadowBlur=24,n.fillText(i.icon||"🎮",0,0),n.restore(),n.font='bold 27px "Outfit", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),n.shadowBlur=16,n.fillStyle="#ffffff",n.fillText((i.name||"ARCADE GAME").toUpperCase(),256,280),n.font="bold 15px monospace",n.fillStyle="#ffd32a",n.shadowColor="#ffd32a",n.shadowBlur=8,n.fillText(`• ${(i.category||"ACTION").toUpperCase()} • 60 FPS •`,256,325),Math.floor(u*2.8)%2===0&&(n.fillStyle="#"+e.primary.toString(16).padStart(6,"0"),n.font="bold 22px monospace",n.shadowColor="#"+e.accent.toString(16).padStart(6,"0"),n.shadowBlur=16,n.fillText("▶ PRESS [SPACE] TO PLAY ◀",256,405),n.font="14px monospace",n.fillStyle="#94a3b8",n.shadowBlur=0,n.fillText("INSERT 1 COIN (25¢)",256,436)),n.fillStyle="rgba(0, 0, 0, 0.28)";for(let p=0;p<512;p+=4)n.fillRect(0,p,512,2);n.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),n.lineWidth=8,n.strokeRect(4,4,504,504),d.needsUpdate=!0},d=new Xn(t);return d.minFilter=_t,c(0),{texture:d,update:c}}function Hp(i,e,t=0){const n=new gn;n.position.set(e.x,0,e.z),n.rotation.y=t;let s=0;for(let X=0;X<(i.id||"").length;X++)s=(s<<5)-s+i.id.charCodeAt(X);let r=Ao[Math.abs(s)%Ao.length];i.id==="street-fighter-2"&&(r={primary:16726832,secondary:26367,accent:16765738}),i.id==="super-mario"&&(r={primary:15017249,secondary:4436039,accent:16502784}),i.id==="super-bomberman"&&(r={primary:28908,secondary:16777215,accent:16729943}),i.id==="gta-2"&&(r={primary:16765738,secondary:26367,accent:16726072}),i.id==="classic-doom"&&(r={primary:16726072,secondary:16752410,accent:16765738}),i.id==="classic-pacman"&&(r={primary:16765738,secondary:26367,accent:16777215});const a=new St({color:1975357,roughness:.4,metalness:.3}),o=new St({color:r.primary,roughness:.3,metalness:.4}),l=new ct({color:r.primary}),c=new rt(1.6,1.4,1.3),d=new ve(c,a);d.position.set(0,.7,0),n.add(d);const u=new Wt(.7,.8),f=new St({color:790304,roughness:.5,metalness:.7}),p=new ve(u,f);p.position.set(0,.75,.66),n.add(p);const _=new rt(.14,.1,.04),x=new ct({color:16755200}),m=new ve(_,x);m.position.set(-.16,.9,.68);const h=new ve(_,x);h.position.set(.16,.9,.68),n.add(m),n.add(h);const S=new rt(1.65,.22,.7),b=new St({color:1316907,roughness:.3,metalness:.4}),y=new ve(S,b);y.position.set(0,1.4,.48),y.rotation.x=.22,n.add(y);const A=new $t(.02,.02,.14),w=new St({color:13421772,metalness:.9}),R=new Ii(.05,12,12),U=new ct({color:r.accent}),v=new ve(A,w);v.position.set(-.35,1.55,.48);const E=new ve(R,U);E.position.set(-.35,1.63,.48),n.add(v),n.add(E);const P=new $t(.035,.035,.03,10),B=[62975,16711807,16765738,393121];for(let X=0;X<2;X++)for(let j=0;j<3;j++){const W=new ct({color:B[(X*3+j)%B.length]}),_e=new ve(P,W);_e.position.set(.12+j*.1,1.48-X*.06,.54-X*.08),n.add(_e)}const F=new rt(1.6,1.3,1.1),V=new ve(F,a);V.position.set(0,2.1,-.05),n.add(V);const q=new rt(1.4,1,.08),z=new St({color:527128,roughness:.8}),H=new ve(q,z);H.position.set(0,2.15,.46),H.rotation.x=-.25,n.add(H);const{texture:$,update:ie}=Vp(i,r),ne=new Wt(1.22,.88),ae=new ct({map:$}),ee=new ve(ne,ae);ee.position.set(0,2.15,.51),ee.rotation.x=-.25,n.add(ee);const Pe=new rt(1.65,.6,.85),Fe=new ve(Pe,a);Fe.position.set(0,3,.2),n.add(Fe);const Ve=Gp(i,r),Y=new ct({map:Ve}),K=new Wt(1.58,.52),le=new ve(K,Y);le.position.set(0,3.02,.64),le.rotation.x=-.08,n.add(le);const we=new rt(1.68,.05,.05),me=new ve(we,l);me.position.set(0,3.3,.66);const ke=new ve(we,l);ke.position.set(0,2.74,.62),n.add(me),n.add(ke);const lt=new rt(.06,2.7,1.25),Le=new ve(lt,o);Le.position.set(-.82,1.7,.05);const We=new ve(lt,o);We.position.set(.82,1.7,.05),n.add(Le),n.add(We);const Ke=new Pn(1.2,1.45,32),Ue=new ct({color:r.primary,side:yt,transparent:!0,opacity:.35}),tt=new ve(Ke,Ue);tt.rotation.x=-Math.PI/2,tt.position.set(0,.03,.8),n.add(tt);const C=Math.sin(t)*2.2,ut=Math.cos(t)*2.2,$e=e.x+C,nt=e.z+ut,Me=Math.abs(Math.sin(t))>.5,T=Me?.65:.78,g=Me?.78:.65,D={minX:e.x-T,maxX:e.x+T,minZ:e.z-g,maxZ:e.z+g};return{game:i,group:n,theme:r,screenMesh:ee,marqueeFace:le,floorGlow:tt,standSpot:{x:$e,z:nt},position:{x:e.x,z:e.z},rotationY:t,collisionBox:D,isHovered:!1,_lastFrame:0,update(X,j){if(j&&!this.isHovered){const W=this.position.x-j.x,_e=this.position.z-j.z;if(W*W+_e*_e>72.25){tt.material.opacity=.25;return}}if(this.isHovered)ie(X),tt.material.opacity=.7+Math.sin(X*6)*.25;else{const W=Math.floor(X*12);this._lastFrame!==W&&(this._lastFrame=W,ie(X)),tt.material.opacity=.35}}}}class Wp{constructor(){this.catalog=null,this.tracks=[],this.artists=[],this.currentIndex=0,this.isPlaying=!1,this.isDucked=!1,this.volume=.75,this.duckMultiplier=1,this.duckInterval=null,this.subscribers=new Set,this.unlocked=!1,this.audioElement=new Audio,this.audioElement.preload="auto",this.audioElement.volume=this.volume,this.currentTrackTime=0,this.tickerInterval=null,this.bindAudioEvents()}bindAudioEvents(){this.audioElement.addEventListener("ended",()=>{this.next()}),this.audioElement.addEventListener("timeupdate",()=>{isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime)}),this.audioElement.addEventListener("play",()=>{this.isPlaying=!0,this.notify()}),this.audioElement.addEventListener("pause",()=>{this.isPlaying=!1,this.notify()}),this.audioElement.addEventListener("error",e=>{console.warn("Audio playback error on current track:",e,this.audioElement.error),this.isPlaying=!1,this.notify()})}resolveUrl(e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const t=e.replace(/^(\.\/|\/)/,"");try{return new URL(t,window.location.href).href}catch{return t}}async init(){const e=await this.loadCatalog();return e&&(this.catalog=e,this.tracks=(e.tracks||[]).map(t=>({...t,resolvedAudioUrl:this.resolveUrl(t.audioUrl)})),this.artists=e.artists||[]),this.tracks.length>0&&!this.audioElement.src&&(this.audioElement.src=this.tracks[0].resolvedAudioUrl,this.audioElement.load()),this.startTicker(),this.notify(),this}async loadCatalog(){const e=[new URL("music/catalog.json",window.location.href).href,"./music/catalog.json","/music/catalog.json"];for(const t of e)try{const n=await fetch(t);if(n.ok){const s=await n.json();if(s&&s.tracks&&s.tracks.length>0)return s}}catch{}return console.warn("Could not locate catalog.json in any fallback path"),null}getCurrentTrack(){return this.tracks.length?this.tracks[this.currentIndex]:null}async playTrack(e){if(!this.tracks.length)return;e<0&&(e=this.tracks.length-1),e>=this.tracks.length&&(e=0),this.currentIndex=e;const t=this.getCurrentTrack();if(!t)return;this.currentTrackTime=0;const n=t.resolvedAudioUrl||this.resolveUrl(t.audioUrl);this.audioElement.src!==n&&(this.audioElement.src=n,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(s){console.warn("Audio play() error or user gesture required:",s),this.isPlaying=!1,this.notify()}}async togglePlay(){if(this.tracks.length)if(this.isPlaying)this.pause();else{const e=this.getCurrentTrack(),t=(e==null?void 0:e.resolvedAudioUrl)||this.resolveUrl(e==null?void 0:e.audioUrl);(!this.audioElement.src||this.audioElement.src.endsWith("/")||this.audioElement.src==="about:blank")&&t&&(this.audioElement.src=t,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(n){console.warn("Audio play() error:",n),this.playTrack(this.currentIndex)}}}pause(){this.isPlaying=!1,this.audioElement.pause(),this.notify()}next(){const e=(this.currentIndex+1)%(this.tracks.length||1);this.playTrack(e)}prev(){const e=(this.currentIndex-1+(this.tracks.length||1))%(this.tracks.length||1);this.playTrack(e)}applyVolume(){const e=this.volume*this.duckMultiplier;this.audioElement.volume=Math.max(0,Math.min(1,e))}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyVolume(),this.notify()}duck(e){this.isDucked=e;const t=e?.12:1;this.duckInterval&&clearInterval(this.duckInterval);const n=e?-.1:.1;this.duckInterval=setInterval(()=>{Math.abs(this.duckMultiplier-t)<.1?(this.duckMultiplier=t,this.applyVolume(),clearInterval(this.duckInterval),this.duckInterval=null):(this.duckMultiplier+=n,this.applyVolume())},25)}unlockAndPlay(){this.unlocked||(this.unlocked=!0,this.isPlaying||this.playTrack(this.currentIndex))}getFrequencyData(e){var r;if(!this.isPlaying){e.fill(0);return}const t=performance.now()/1e3,n=((r=this.getCurrentTrack())==null?void 0:r.bpm)||132,s=t*(n/60)%1;for(let a=0;a<e.length;a++){const o=Math.sin(t*8+a*.5),l=Math.pow(Math.sin(s*Math.PI),2),c=Math.max(.08,l*.65+(o*.5+.5)*.35);e[a]=Math.floor(c*255*(this.isDucked?.2:1))}}startTicker(){this.tickerInterval&&clearInterval(this.tickerInterval),this.tickerInterval=setInterval(()=>{this.isPlaying&&(isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime),this.notify("time"))},250)}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(e="state"){const t=this.getCurrentTrack(),n=this.audioElement&&this.audioElement.duration&&!isNaN(this.audioElement.duration)&&this.audioElement.duration>0?this.audioElement.duration:t&&t.durationSec||150,s={type:e,isPlaying:this.isPlaying,currentTrack:t,currentIndex:this.currentIndex,currentTime:this.currentTrackTime,duration:n,volume:this.volume,isDucked:this.isDucked,isProcedural:!1};this.subscribers.forEach(r=>{try{r(s)}catch(a){console.error(a)}})}}const Be=new Wp;typeof window<"u"&&(window.__MUSIC_MANAGER__=Be);function Xp(){const i=document.createElement("canvas");i.width=512,i.height=512;const e=i.getContext("2d"),t=new Xn(i);t.minFilter=_t;const n=new Uint8Array(32);return{texture:t,render:(r,a)=>{e.clearRect(0,0,512,512);const o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#0a091d"),o.addColorStop(.5,"#151336"),o.addColorStop(1,"#080718"),e.fillStyle=o,e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.12)",e.lineWidth=1;for(let S=0;S<512;S+=32)e.beginPath(),e.moveTo(0,S),e.lineTo(512,S),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.35)",e.fillRect(80,28,352,34),e.strokeStyle="#ff007f",e.lineWidth=2,e.strokeRect(80,28,352,34),e.fillStyle="#ffffff",e.font='bold 15px "Press Start 2P", monospace, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("★ GAME SOUNDTRACKS ★",256,45);const l=Be.getCurrentTrack(),c=Be.isPlaying;e.fillStyle="#00f5ff",e.font='bold 22px "Outfit", Arial, sans-serif',e.shadowColor="#00f5ff",e.shadowBlur=12;const d=l?l.title:"ARCADE CLASSICS FM";e.fillText(d,256,105),e.fillStyle="#ffd32a",e.font="16px monospace",e.shadowColor="#ffd32a",e.shadowBlur=8;const u=l?`${l.artistName} • ${l.game||"ORIGINAL OST"}`:"TRILHAS DOS FLIPERAMAS";e.fillText(u,256,138),Be.getFrequencyData(n);const f=20,p=16,_=6,x=(512-(f*(p+_)-_))/2,m=320,h=120;for(let S=0;S<f;S++){let b=n[S%n.length]/255;(!c||b<.05)&&(b=.15+.12*Math.sin(r*3+S*.4));const y=Math.max(6,b*h),A=x+S*(p+_),w=m-y,R=e.createLinearGradient(0,m,0,m-h);R.addColorStop(0,"#00f5ff"),R.addColorStop(.6,"#ff007f"),R.addColorStop(1,"#ffd32a"),e.fillStyle=R,e.shadowColor="#ff007f",e.shadowBlur=8,e.fillRect(A,w,p,y),e.fillStyle="#ffffff",e.fillRect(A,w-4,p,3)}e.strokeStyle="#00f5ff",e.lineWidth=2,e.beginPath(),e.moveTo(x-10,m+2),e.lineTo(x+f*(p+_)+4,m+2),e.stroke(),e.shadowBlur=0,c?(e.fillStyle="#05ffa1",e.font="bold 16px monospace",e.fillText("● EM REPRODUÇÃO [SPACE = MENU]",256,380)):(e.fillStyle="#ff007f",e.font="bold 16px monospace",e.fillText("■ EM ESPERA [SPACE = ABRIR]",256,380)),(Math.floor(r*2.5)%2===0||a)&&(e.fillStyle="#00f5ff",e.font="bold 20px monospace",e.shadowColor="#00f5ff",e.shadowBlur=14,e.fillText("▶ PRESSIONE [ESPAÇO] PARA OUVIR ◀",256,435)),e.fillStyle="rgba(0, 0, 0, 0.28)";for(let S=0;S<512;S+=4)e.fillRect(0,S,512,2);e.strokeStyle=a?"#00f5ff":"#ff007f",e.lineWidth=8,e.strokeRect(4,4,504,504),t.needsUpdate=!0}}}function qp(){const i=document.createElement("canvas");i.width=512,i.height=160;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,160);t.addColorStop(0,"#0c0721"),t.addColorStop(.5,"#220b38"),t.addColorStop(1,"#0c0721"),e.fillStyle=t,e.fillRect(0,0,512,160),e.strokeStyle="#ff007f",e.lineWidth=5,e.strokeRect(6,6,500,148),e.strokeStyle="#00f5ff",e.lineWidth=2,e.strokeRect(12,12,488,136),e.fillStyle="#ffffff",e.font='bold 36px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#00f5ff",e.shadowBlur=20,e.fillText("📻 RETRO ARCADE JUKEBOX",256,65),e.font="bold 16px monospace",e.fillStyle="#ffd32a",e.shadowColor="#ff007f",e.shadowBlur=10,e.fillText("• TRILHAS SONORAS CLÁSSICAS DOS JOGOS •",256,115);const n=new Xn(i);return n.needsUpdate=!0,n}function Yp(i,e=0){const t=new gn;t.position.set(i.x,0,i.z),t.rotation.y=e;const n=new St({color:1249576,roughness:.35,metalness:.6}),s=new St({color:15658734,roughness:.1,metalness:.95}),r=new ct({color:62975}),a=new ct({color:16711807});new ct({color:16765738});const o=new rt(1.8,1.3,1.2),l=new ve(o,n);l.position.set(0,.65,0),t.add(l);for(let Le=0;Le<7;Le++){const We=new rt(1.3,.04,.05),Ke=new ve(We,s);Ke.position.set(0,.4+Le*.12,.61),t.add(Ke)}const c=new $t(.08,.08,3.2,16),d=new ve(c,r);d.position.set(-.95,1.6,.3),t.add(d);const u=new ve(c,a);u.position.set(.95,1.6,.3),t.add(u);const f=new rt(1.85,.2,.7),p=new St({color:1709624,roughness:.2,metalness:.7}),_=new ve(f,p);_.position.set(0,1.35,.45),_.rotation.x=.2,t.add(_);const x=new gn;x.position.set(0,1.65,.45),t.add(x);const m=new $t(.32,.32,.02,32),h=new St({color:1118481,roughness:.2,metalness:.8}),S=new ve(m,h);x.add(S);const b=new Pn(.12,.3,32),y=new ct({color:62975,side:yt}),A=new ve(b,y);A.rotation.x=-Math.PI/2,A.position.y=.015,x.add(A);const w=new Pn(0,.1,32),R=new ct({color:16711807,side:yt}),U=new ve(w,R);U.rotation.x=-Math.PI/2,U.position.y=.016,x.add(U);const v=new rt(1.8,1.3,1.1),E=new ve(v,n);E.position.set(0,2.1,-.05),t.add(E);const P=new rt(1.5,1.05,.08),B=new St({color:591639,roughness:.7}),F=new ve(P,B);F.position.set(0,2.15,.46),F.rotation.x=-.25,t.add(F);const{texture:V,render:q}=Xp(),z=new Wt(1.4,.95),H=new ct({map:V,toneMapped:!1}),$=new ve(z,H);$.position.set(0,2.15,.51),$.rotation.x=-.25,t.add($);const ie=new $t(.9,.9,1,32,1,!1,0,Math.PI),ne=new ve(ie,n);ne.rotation.z=Math.PI/2,ne.rotation.y=-Math.PI/2,ne.position.set(0,2.8,-.05),t.add(ne);const ae=new fa(.88,.05,16,32,Math.PI),ee=new ve(ae,r);ee.position.set(0,2.8,.4),t.add(ee);const Pe=qp();new rt(1.7,.45,.1);const Fe=new ve(new Wt(1.68,.42),new ct({map:Pe,toneMapped:!1}));Fe.position.set(0,3.12,.46),t.add(Fe);const Ve=new Wt(3.6,3.6),Y=new ct({color:62975,transparent:!0,opacity:.45,side:yt}),K=new ve(Ve,Y);K.rotation.x=-Math.PI/2,K.position.set(0,.03,.6),t.add(K);const le=2,we=i.x+Math.sin(e)*le,me=i.z+Math.cos(e)*le,ke={minX:i.x-.95,maxX:i.x+.95,minZ:i.z-.7,maxZ:i.z+.7};return{game:{id:"phase-ai-jukebox",name:"Retro Arcade Jukebox",icon:"📻",category:"music",description:"Ouça as trilhas sonoras clássicas de Street Fighter II, Mario, Sonic, OutRun, GTA 2, Streets of Rage, Doom e Mega Man!",isJukebox:!0},group:t,screenMesh:$,marqueeFace:Fe,floorGlow:K,standSpot:{x:we,z:me},position:{x:i.x,z:i.z},rotationY:e,collisionBox:ke,isHovered:!1,isJukebox:!0,update(Le){q(Le,this.isHovered),Be.isPlaying?x.rotation.y+=.04:x.rotation.y+=.005,this.isHovered?(K.material.opacity=.75+Math.sin(Le*6)*.2,ee.material.color.setHex(Math.floor(Le*3)%2===0?62975:16711807)):K.material.opacity=.4+Math.sin(Le*2)*.15}}}function jp(){const i=document.createElement("canvas");i.width=512,i.height=512;const e=i.getContext("2d");e.fillStyle="#10142e",e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.28)",e.lineWidth=2;for(let n=0;n<512;n+=64)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke();for(let n=0;n<512;n+=64)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.45)";for(let n=32;n<512;n+=64)for(let s=32;s<512;s+=64)e.beginPath(),e.arc(n,s,5,0,Math.PI*2),e.fill();const t=new Xn(i);return t.wrapS=Ri,t.wrapT=Ri,t.repeat.set(12,16),t.needsUpdate=!0,t}function ci(i,e,t,n="#00f5ff",s="#ff007f"){const r=document.createElement("canvas");r.width=1024,r.height=256;const a=r.getContext("2d");a.fillStyle="transparent",a.fillRect(0,0,1024,256),a.font='bold 72px "Segoe UI", sans-serif',a.textAlign="center",a.textBaseline="middle",a.shadowColor=s,a.shadowBlur=30,a.fillStyle=n,a.fillText(i,512,128);const o=new Xn(r);o.needsUpdate=!0;const l=new ct({map:o,transparent:!0,side:yt});return new ve(new Wt(e,t),l)}function Kp(i,e){const t={minX:-23.5,maxX:23.5,minZ:-29,maxZ:18},n=new gn;i.add(n);const s=new Bl(16777215,2.4);n.add(s);const r=new Nl(62975,16711807,2.2);n.add(r);const a=new Ja(16777215,2.2);a.position.set(10,25,20),n.add(a);const o=new Ja(62975,1.8);o.position.set(-15,20,-15),n.add(o);const l=new Ks(62975,3.5,60,0);l.position.set(0,8,0),n.add(l);const c=new Ks(16711807,3.2,60,0);c.position.set(-15,7,-10),n.add(c);const d=new Ks(16765738,3.2,60,0);d.position.set(15,7,-10),n.add(d);const u=jp(),f=new Wt(50,76),p=new St({map:u,roughness:.5,metalness:.2}),_=new ve(f,p);_.rotation.x=-Math.PI/2,_.position.set(0,0,4),n.add(_);const x=new $t(10.5,10.5,.08,36),m=new St({color:1581122,roughness:.3,metalness:.5}),h=new ve(x,m);h.position.set(0,.04,-2.5),n.add(h);const S=new Pn(10.2,10.5,36),b=new ct({color:62975,side:yt}),y=new ve(S,b);y.rotation.x=-Math.PI/2,y.position.set(0,.09,-2.5),n.add(y);const A=new Pn(1.2,1.8,24),w=new ct({color:16711807,side:yt}),R=new ve(A,w);R.rotation.x=-Math.PI/2,R.position.set(0,.1,-2.5),n.add(R);const U=new St({color:1448494,roughness:.5,metalness:.3,side:vn}),v=new ve(new rt(50,10,1),U);v.position.set(0,5,-30),n.add(v);const E=new ve(new rt(50,10,1),U);E.position.set(0,5,40),n.add(E);const P=new ve(new rt(1,10,72),U);P.position.set(-24.5,5,4),n.add(P);const B=new ve(new rt(1,10,72),U);B.position.set(24.5,5,4),n.add(B);const F=(Fe,Ve,Y,K,le,we)=>{const me=le?new rt(.12,.12,K):new rt(K,.12,.12),ke=new ct({color:we}),lt=new ve(me,ke);lt.position.set(Fe,Ve,Y),n.add(lt)};F(0,4.2,-29.4,48,!1,62975),F(0,7.8,-29.4,48,!1,16711807),F(-23.9,4.2,4,68,!0,393121),F(23.9,4.2,4,68,!0,16765738);const V=ci("⚡ NOPEX VIRTUAL ARCADE ⚡",24,6,"#00f5ff","#ff007f");V.position.set(0,8.2,-29.2),n.add(V);const q=ci("🌟 SPOTLIGHT MEGAHITS",10,2.5,"#ffd32a","#ff007f");q.position.set(0,6.5,-3.5),n.add(q);const z=ci("⚔️ ACTION & FIGHTING ALLEY",14,2.5,"#ff007f","#00f5ff");z.position.set(-18.5,6.5,-3.5),z.rotation.y=Math.PI/2,n.add(z);const H=ci("🕹️ RETRO VAULT & 16-BIT LEGENDS",15,2.5,"#7928ca","#00f5ff");H.position.set(0,6.5,-25.5),n.add(H);const $=ci("🏎️ SPEEDWAY & RACING",12,2.5,"#ff3838","#ffd32a");$.position.set(11.5,6.5,-10),$.rotation.y=-Math.PI/2,n.add($);const ie=ci("🎱 SPORTS & CASUAL ARCADE",12,2.5,"#05ffa1","#ffd32a");ie.position.set(20,6.5,-5),ie.rotation.y=-Math.PI/2,n.add(ie);const ne={};e.forEach(Fe=>{ne[Fe.id]=Fe});const ae=[],ee=(Fe,Ve,Y)=>{const K=ne[Fe]||e[ae.length%e.length],le=Hp(K,Ve,Y);n.add(le.group),ae.push(le)};ee("classic-doom",{x:-5.4,z:5},0),ee("classic-pacman",{x:-1.8,z:5},0),ee("neon-tetris-3d",{x:1.8,z:5},0);const Pe=Yp({x:5.4,z:5},0);return n.add(Pe.group),ae.push(Pe),ee("geometricsurvivor",{x:0,z:-10},0),ee("cyber-pong-3d",{x:0,z:2.5},Math.PI),ee("neon-viper",{x:-6.5,z:-3.5},Math.PI/2),ee("cute-mini-golf",{x:6.5,z:-3.5},-Math.PI/2),ee("street-fighter-2",{x:-19.5,z:-24.5},Math.PI/2),ee("mk2",{x:-19.5,z:-21},Math.PI/2),ee("sor2",{x:-19.5,z:-17.5},Math.PI/2),ee("mslug",{x:-19.5,z:-14},Math.PI/2),ee("mslugx",{x:-19.5,z:-10.5},Math.PI/2),ee("gta-2",{x:-19.5,z:-7},Math.PI/2),ee("neon-katana-slash",{x:-19.5,z:-3.5},Math.PI/2),ee("stickman-fps-arcade",{x:-19.5,z:0},Math.PI/2),ee("castlevania4",{x:-19.5,z:3.5},Math.PI/2),ee("sky-ace-1944",{x:-19.5,z:7},Math.PI/2),ee("asteroid-blitz",{x:-19.5,z:10.5},Math.PI/2),ee("cyber-shuriken",{x:-19.5,z:14},Math.PI/2),ee("sonic1",{x:-11.4,z:-26.5},0),ee("sonic2",{x:-7.6,z:-26.5},0),ee("megaman2",{x:-3.8,z:-26.5},0),ee("super-mario",{x:0,z:-26.5},0),ee("super-bomberman",{x:3.8,z:-26.5},0),ee("neon-stack-3d",{x:7.6,z:-26.5},0),ee("neon-orbit-drift",{x:11.4,z:-26.5},0),ee("topgear",{x:11.5,z:-20},-Math.PI/2),ee("fzero",{x:11.5,z:-15},-Math.PI/2),ee("outrun",{x:11.5,z:-10},-Math.PI/2),ee("neon-drift-racer",{x:11.5,z:-5},-Math.PI/2),ee("cyber-runner-3d",{x:11.5,z:0},-Math.PI/2),ee("kawaii-8ball-pool",{x:20.5,z:-20},-Math.PI/2),ee("neon-pachinko-pop",{x:20.5,z:-15},-Math.PI/2),ee("neon-archery-master",{x:20.5,z:-10},-Math.PI/2),ee("brick-breaker-fx",{x:20.5,z:-5},-Math.PI/2),ee("neon-drop-2048",{x:20.5,z:0},-Math.PI/2),ee("cyber-pinball-fx",{x:20.5,z:5},-Math.PI/2),ee("flappy-cyber-droid",{x:20.5,z:10},-Math.PI/2),{roomBounds:t,cabinets:ae,worldGroup:n,floorMesh:_,update(Fe,Ve){ae.forEach(Y=>Y.update(Fe,Ve)),y.material.opacity=.8+Math.sin(Fe*4)*.2}}}class $p{constructor(e,t,n=null){this.cabinets=e,this.onPlayGame=t,this.onDiscoverCabinet=n,this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl=document.getElementById("arcade-3d-prompt"),this.promptTitle=document.getElementById("arcade-prompt-title"),this.promptDesc=document.getElementById("arcade-prompt-desc"),this.promptRecord=document.getElementById("arcade-prompt-record"),this.actionBtn=document.getElementById("arcade-action-btn"),this.playBtn=document.getElementById("arcade-hologram-play-btn"),this.bindInputs()}bindInputs(){window.addEventListener("keydown",e=>{(e.code==="Enter"||e.code==="KeyE"||e.code==="Space")&&this.activeCabinet&&(e.preventDefault(),this.triggerPlay())}),this.actionBtn&&this.actionBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.playBtn&&this.playBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.promptEl&&this.promptEl.addEventListener("click",e=>{e.target.tagName!=="BUTTON"&&this.activeCabinet&&this.triggerPlay()})}triggerPlay(){this.activeCabinet&&this.onPlayGame&&this.onPlayGame(this.activeCabinet.game,this.activeCabinet)}update(e){let t=null,n=1/0;for(const s of this.cabinets){s.isHovered=!1;const r=Math.hypot(e.x-s.standSpot.x,e.z-s.standSpot.z);r<3.8&&r<n&&(n=r,t=s)}t?(t.isHovered=!0,this.activeCabinet=t,this.lastHoveredCab!==t&&(hc(),this.lastHoveredCab=t,this.renderHologram(t.game),this.onDiscoverCabinet&&this.onDiscoverCabinet(t.game,t)),this.promptEl&&this.promptEl.classList.add("visible"),this.actionBtn&&this.actionBtn.classList.add("visible")):(this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl&&this.promptEl.classList.remove("visible"),this.actionBtn&&this.actionBtn.classList.remove("visible"))}renderHologram(e){if(this.promptTitle&&(this.promptTitle.innerHTML=`${e.icon||"🎮"} ${e.name||"ARCADE GAME"}`),this.promptDesc&&(this.promptDesc.textContent=e.description||"Pressione [ESPAÇO] para entrar na máquina e jogar."),this.promptRecord)if(e.isJukebox)this.promptRecord.innerHTML="🎵 <strong>RETRO ARCADE JUKEBOX</strong> • 15 Trilhas Clássicas dos Jogos";else{const t=window.__ARCADE_LEADERBOARDS__&&window.__ARCADE_LEADERBOARDS__[e.id];t&&t.topScore?this.promptRecord.innerHTML=`🏆 Recorde Mundial: <strong>${t.topScore.toLocaleString()} ${e.unit||"PTS"}</strong> [${t.topPilot||"MRC"}]`:this.promptRecord.innerHTML=`⚡ 60 FPS Instantâneo • <strong>${(e.category||"ACTION").toUpperCase()}</strong>`}this.playBtn&&(e.isJukebox?this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">J</kbd> PARA OUVIR</span> ➔':this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">ENTER</kbd> PARA JOGAR</span> ➔'),this.actionBtn&&(e.isJukebox?this.actionBtn.innerHTML="<span>OUVIR</span> 📻":this.actionBtn.innerHTML="<span>JOGAR</span> 🕹️")}}class Zp{constructor(e){this.onCloseCallback=e,this.overlay=document.getElementById("arcade-game-overlay"),this.iframe=document.getElementById("arcade-game-iframe"),this.titleEl=document.getElementById("arcade-overlay-title"),this.closeBtn=document.getElementById("arcade-overlay-back"),this.fullscreenBtn=document.getElementById("arcade-overlay-fullscreen"),this.reloadBtn=document.getElementById("arcade-overlay-reload"),this.isOpen=!1,this.activeGame=null,this.bindEvents()}bindEvents(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.overlay.requestFullscreen().catch(()=>{})}),this.reloadBtn&&this.reloadBtn.addEventListener("click",()=>{this.iframe&&this.activeGame&&(this.iframe.src=this.activeGame.url)}),window.addEventListener("message",e=>{e.data&&(e.data.type==="CLOSE_ARCADE_GAME"||e.data.type==="ARCADE_CLOSE"||e.data.type==="ARCADE_EXIT"||e.data==="closeArcade"||e.data==="escape")&&this.close()}),window.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.isOpen){e.preventDefault(),e.stopPropagation(),this.close();return}if(this.isOpen&&this.iframe&&this.iframe.contentWindow&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","a","A","s","S","d","D"," ","Enter"].includes(e.key))try{this.iframe.contentWindow.postMessage({type:"ARCADE_KEY_DOWN",key:e.key,code:e.code},"*"),this.iframe.contentWindow.dispatchEvent(new KeyboardEvent("keydown",{key:e.key,code:e.code,bubbles:!0}))}catch{}},!0)}attachIframeEscape(){if(this.iframe)try{const e=this.iframe.contentWindow,t=this.iframe.contentDocument||(e==null?void 0:e.document),n=s=>{(s.key==="Escape"||s.code==="Escape"||s.keyCode===27)&&(s.preventDefault(),s.stopPropagation(),this.close())};e&&(e.removeEventListener("keydown",n,!0),e.addEventListener("keydown",n,!0)),t&&(t.removeEventListener("keydown",n,!0),t.addEventListener("keydown",n,!0))}catch{}}open(e){this.isOpen=!0,window.__arcadeOverlayOpen=!0,this.activeGame=e,lc(),Be.duck(!0),this.titleEl&&(this.titleEl.innerHTML=`${e.icon||"🎮"} ${e.name||"JOGO"}`),this.iframe&&(this.iframe.src=e.url,this.iframe.onload=()=>{try{this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape()}catch{}},setTimeout(()=>this.attachIframeEscape(),150),setTimeout(()=>this.attachIframeEscape(),600),setTimeout(()=>this.attachIframeEscape(),1500)),this.overlay&&(this.overlay.style.display="flex",setTimeout(()=>{this.overlay.classList.add("active");try{this.iframe&&(this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape())}catch{}},100))}close(){this.isOpen&&(this.isOpen=!1,window.__arcadeOverlayOpen=!1,document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),dc(),Be.duck(!1),this.overlay&&(this.overlay.classList.remove("active"),setTimeout(()=>{this.overlay.style.display="none",this.iframe&&(this.iframe.src="about:blank")},250)),this.onCloseCallback&&this.onCloseCallback())}}class Jp{constructor(){this.modalEl=document.getElementById("arcade-jukebox-modal"),this.isOpen=!1,this.selectedArtistId="all",this.showLyrics=!1,this.renderSkeleton(),this.bindEvents(),Be.subscribe(e=>this.onMusicStateUpdate(e))}renderSkeleton(){this.modalEl&&(this.modalEl.innerHTML=`
      <div class="jukebox-backdrop" id="jukebox-backdrop"></div>
      <div class="jukebox-window">
        <!-- Top Bar -->
        <div class="jukebox-header">
          <div class="jukebox-brand">
            <span class="jukebox-logo-icon">⚡</span>
            <div>
              <div class="jukebox-title">RETRO ARCADE JUKEBOX</div>
              <div class="jukebox-subtitle">TRILHAS SONORAS CLÁSSICAS DOS JOGOS</div>
            </div>
          </div>
          <div class="jukebox-header-actions">
            <button id="jukebox-close-btn" class="jukebox-close-btn" title="Fechar Jukebox (ESC)">✕ FECHAR</button>
          </div>
        </div>

        <!-- Artist Filter Tabs -->
        <div class="jukebox-tabs" id="jukebox-artist-tabs">
          <button class="juke-tab active" data-artist="all">🎵 Todas as Músicas</button>
        </div>

        <!-- Main Content Area: Track Grid + Lyrics Panel -->
        <div class="jukebox-body">
          <div class="jukebox-tracklist" id="jukebox-track-container">
            <!-- Dynamically populated -->
          </div>

          <div class="jukebox-lyrics-panel" id="jukebox-lyrics-panel" style="display: none;">
            <div class="lyrics-header">
              <span class="lyrics-tag">LETRA & TRÍVIA DO JOGO</span>
              <button id="lyrics-close-btn" class="lyrics-close-btn">✕</button>
            </div>
            <div class="lyrics-content" id="jukebox-lyrics-content">
              Nenhuma informação disponível para esta faixa.
            </div>
          </div>
        </div>

        <!-- Bottom Player Dock -->
        <div class="jukebox-dock">
          <div class="dock-left">
            <img id="dock-cover" class="dock-cover-img" src="" alt="Capa" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200'; this.onerror=null;" />
            <div class="dock-info">
              <div id="dock-title" class="dock-title">Selecione uma música</div>
              <div id="dock-artist" class="dock-artist">Phase AI FM</div>
            </div>
            <button id="dock-lyrics-toggle" class="dock-lyrics-btn" title="Exibir Letra">📝 LETRA</button>
          </div>

          <div class="dock-center">
            <div class="dock-buttons">
              <button id="dock-prev" class="dock-ctrl-btn" title="Anterior">⏮</button>
              <button id="dock-play" class="dock-ctrl-btn dock-play-btn" title="Play/Pause">▶</button>
              <button id="dock-next" class="dock-ctrl-btn" title="Próxima">⏭</button>
            </div>
            <div class="dock-scrubber-wrap">
              <span id="dock-time-cur" class="dock-time">0:00</span>
              <div class="dock-progress-track" id="dock-progress-track">
                <div class="dock-progress-bar" id="dock-progress-bar"></div>
              </div>
              <span id="dock-time-dur" class="dock-time">0:00</span>
            </div>
          </div>

          <div class="dock-right">
            <div class="dock-vol-wrap">
              <span class="dock-vol-icon">🔊</span>
              <input type="range" id="dock-vol-slider" min="0" max="1" step="0.05" value="0.7" class="dock-vol-slider" />
            </div>
            <div class="dock-visualizer-mini">
              <canvas id="dock-canvas" width="60" height="24"></canvas>
            </div>
          </div>
        </div>
      </div>
    `,this.initCanvasVisualizer())}initCanvasVisualizer(){if(this.canvas=document.getElementById("dock-canvas"),!this.canvas)return;this.ctx=this.canvas.getContext("2d"),this.freqData=new Uint8Array(16);const e=()=>{if(this.isOpen&&this.ctx){this.ctx.clearRect(0,0,60,24),Be.getFrequencyData(this.freqData);for(let t=0;t<8;t++){const n=this.freqData[t]/255,s=Math.max(3,n*22);this.ctx.fillStyle=t%2===0?"#00f5ff":"#ff007f",this.ctx.fillRect(t*7+2,24-s,5,s)}}requestAnimationFrame(e)};requestAnimationFrame(e)}bindEvents(){const e=document.getElementById("jukebox-close-btn"),t=document.getElementById("jukebox-backdrop"),n=document.getElementById("dock-play"),s=document.getElementById("dock-prev"),r=document.getElementById("dock-next"),a=document.getElementById("dock-vol-slider"),o=document.getElementById("dock-lyrics-toggle"),l=document.getElementById("lyrics-close-btn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.close()),n&&n.addEventListener("click",()=>Be.togglePlay()),s&&s.addEventListener("click",()=>Be.prev()),r&&r.addEventListener("click",()=>Be.next()),a&&a.addEventListener("input",c=>{Be.setVolume(parseFloat(c.target.value))}),o&&o.addEventListener("click",()=>{this.showLyrics=!this.showLyrics,this.updateLyricsPanel()}),l&&l.addEventListener("click",()=>{this.showLyrics=!1,this.updateLyricsPanel()}),window.addEventListener("keydown",c=>{this.isOpen&&(c.key==="Escape"?(c.preventDefault(),this.close()):c.code==="Space"&&c.target.tagName!=="INPUT"&&(c.preventDefault(),Be.togglePlay()))})}open(){this.isOpen=!0,this.modalEl&&(this.modalEl.style.display="flex",setTimeout(()=>this.modalEl.classList.add("active"),10)),this.populateTabs(),this.renderTracks(),this.onMusicStateUpdate({isPlaying:Be.isPlaying,currentTrack:Be.getCurrentTrack(),currentTime:Be.currentTrackTime,duration:Be.getCurrentTrack()&&Be.getCurrentTrack().durationSec||140})}close(){this.isOpen=!1,this.modalEl&&(this.modalEl.classList.remove("active"),setTimeout(()=>{this.modalEl.style.display="none"},250))}populateTabs(){const e=document.getElementById("jukebox-artist-tabs");if(!e||!Be.artists.length)return;let t=`<button class="juke-tab ${this.selectedArtistId==="all"?"active":""}" data-artist="all">🎵 Todas as Músicas</button>`;Be.artists.forEach(n=>{const s=this.selectedArtistId===n.id?"active":"";t+=`
        <button class="juke-tab ${s}" data-artist="${n.id}">
          <img src="${n.avatar}" class="tab-avatar" alt="" onerror="this.style.display='none'" />
          ${n.name}
        </button>
      `}),e.innerHTML=t,e.querySelectorAll(".juke-tab").forEach(n=>{n.addEventListener("click",s=>{this.selectedArtistId=n.getAttribute("data-artist"),e.querySelectorAll(".juke-tab").forEach(r=>r.classList.remove("active")),n.classList.add("active"),this.renderTracks()})})}renderTracks(){const e=document.getElementById("jukebox-track-container");if(!e)return;const t=Be.tracks.filter(s=>this.selectedArtistId==="all"?!0:s.artistId===this.selectedArtistId);if(!t.length){e.innerHTML='<div class="juke-empty">Nenhuma faixa encontrada neste filtro.</div>';return}const n=Be.getCurrentTrack();e.innerHTML=t.map(s=>{const r=n&&n.id===s.id,a=r&&Be.isPlaying;return`
        <div class="juke-track-card ${r?"now-active":""}" data-id="${s.id}">
          <div class="track-card-cover-wrap">
            <img src="${s.cover}" class="track-card-cover" alt="${s.title}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200'" />
            <button class="track-card-play-btn" data-track-id="${s.id}">
              ${a?"⏸":"▶"}
            </button>
          </div>
          <div class="track-card-info">
            <div class="track-card-title-row">
              <span class="track-card-title">${s.title}</span>
              ${r?'<span class="now-playing-badge">OUVINDO</span>':""}
            </div>
            <div class="track-card-artist">${s.artistName} • <span class="album-name">${s.album||"Single"}</span></div>
            <div class="track-card-meta">
              <span class="track-meta-badge">⚡ ${s.bpm||128} BPM</span>
              <span class="track-meta-plays">▶ ${s.plays||"1M"}</span>
              <span class="track-meta-time">⏱ ${s.duration||"2:15"}</span>
            </div>
          </div>
        </div>
      `}).join(""),e.querySelectorAll(".juke-track-card").forEach(s=>{s.addEventListener("click",r=>{const a=s.getAttribute("data-id"),o=Be.tracks.findIndex(l=>l.id===a);o!==-1&&(Be.currentIndex===o&&Be.isPlaying?Be.togglePlay():Be.playTrack(o))})})}onMusicStateUpdate(e){const t=document.getElementById("dock-play"),n=document.getElementById("dock-cover"),s=document.getElementById("dock-title"),r=document.getElementById("dock-artist"),a=document.getElementById("dock-time-cur"),o=document.getElementById("dock-time-dur"),l=document.getElementById("dock-progress-bar");if(t&&(t.innerHTML=e.isPlaying?"⏸":"▶"),e.currentTrack&&(n&&(n.src=e.currentTrack.cover),s&&(s.textContent=e.currentTrack.title),r&&(r.textContent=`${e.currentTrack.artistName} • ${e.currentTrack.synthStyle||"AI Synth"}`)),a&&e.currentTime!==void 0&&(a.textContent=this.formatSeconds(e.currentTime)),o&&e.duration!==void 0&&(o.textContent=this.formatSeconds(e.duration)),l&&e.duration){const c=Math.min(100,e.currentTime/e.duration*100);l.style.width=`${c}%`}e.type==="state"&&(this.renderTracks(),this.updateLyricsPanel())}updateLyricsPanel(){const e=document.getElementById("jukebox-lyrics-panel"),t=document.getElementById("jukebox-lyrics-content");if(!e||!t)return;if(!this.showLyrics){e.style.display="none";return}e.style.display="flex";const n=Be.getCurrentTrack();n&&n.lyrics&&n.lyrics.length?t.innerHTML=n.lyrics.map(s=>`
        <div class="lyrics-line">
          <span class="lyrics-time">[${this.formatSeconds(s.time)}]</span>
          <span class="lyrics-text">${s.text}</span>
        </div>
      `).join(""):t.innerHTML='<div class="lyrics-empty">Nenhuma letra sincronizada para esta faixa instrumental.</div>'}formatSeconds(e){(isNaN(e)||e<0)&&(e=0);const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?"0":""}${n}`}}class Qp{constructor(e){this.onOpenJukeboxModal=e,this.hudContainer=document.getElementById("arcade-music-hud"),this.tickerEl=document.getElementById("music-hud-ticker"),this.playBtn=document.getElementById("music-hud-play"),this.prevBtn=document.getElementById("music-hud-prev"),this.nextBtn=document.getElementById("music-hud-next"),this.expandBtn=document.getElementById("music-hud-expand"),this.volBtn=document.getElementById("music-hud-vol"),this.bars=document.querySelectorAll(".hud-eq-bar"),this.isMuted=!1,this.prevVolume=.7,this.bindEvents(),Be.subscribe(t=>this.update(t))}bindEvents(){this.playBtn&&this.playBtn.addEventListener("click",e=>{e.stopPropagation(),Be.togglePlay()}),this.prevBtn&&this.prevBtn.addEventListener("click",e=>{e.stopPropagation(),Be.prev()}),this.nextBtn&&this.nextBtn.addEventListener("click",e=>{e.stopPropagation(),Be.next()}),this.expandBtn&&this.expandBtn.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.tickerEl&&this.tickerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.volBtn&&this.volBtn.addEventListener("click",e=>{e.stopPropagation(),this.isMuted?(this.isMuted=!1,Be.setVolume(this.prevVolume||.7),this.volBtn.textContent="🔊"):(this.isMuted=!0,this.prevVolume=Be.volume,Be.setVolume(0),this.volBtn.textContent="🔇")})}update(e){if(this.playBtn&&(this.playBtn.innerHTML=e.isPlaying?"⏸":"▶",this.playBtn.setAttribute("title",e.isPlaying?"Pausar":"Tocar")),this.tickerEl&&e.currentTrack){const n=e.isProcedural?" [SYNTH AI]":"";this.tickerEl.innerHTML=`🎵 <strong>${e.currentTrack.artistName}</strong> — ${e.currentTrack.title}${n}`}const t=document.getElementById("music-hud-eq");t&&(e.isPlaying&&!e.isDucked?t.classList.add("dancing"):t.classList.remove("dancing"))}}class em{constructor(e,t){this.container=e,this.gamesManifest=t,this.isRunning=!1,this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.initScene(),this.initWorld(),this.initPlayer(),this.initTokens(),this.initInteraction(),this.initOverlay(),this.initJukebox(),this.initPointerLock(),this.initMobileControls(),this.initTapToWalk(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}initScene(){this.scene=new Al,this.scene.background=new Xe(856619),this.scene.fog=new ha(856619,40,95);const e=this.container.clientWidth||window.innerWidth||1280,t=this.container.clientHeight||window.innerHeight||720;this.camera=new kt(52,e/t,.1,200),this.camera.position.set(0,4.2,13.5),this.renderer=new Bp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.clock=new zl,this.raycaster=new Gl;const n=new Pn(.5,.75,32),s=new ct({color:62975,side:yt,transparent:!0,opacity:0});this.destinationRing=new ve(n,s),this.destinationRing.rotation.x=-Math.PI/2,this.destinationRing.position.set(0,.05,0),this.scene.add(this.destinationRing),this.destinationPulse=0}initWorld(){this.world=Kp(this.scene,this.gamesManifest)}initPlayer(){this.player=new zp(this.scene)}initTokens(){let e=parseInt(localStorage.getItem("arcade_tokens"),10);(isNaN(e)||e<=0)&&(e=25),this.tokens=e;try{this.discoveredCabinets=new Set(JSON.parse(localStorage.getItem("arcade_discovered")||"[]"))}catch{this.discoveredCabinets=new Set}this.updateTokensDisplay()}updateTokensDisplay(){const e=document.getElementById("arcade-tokens-val");e&&(e.textContent=this.tokens),localStorage.setItem("arcade_tokens",String(this.tokens))}spendToken(){this.tokens>0?this.tokens-=1:this.tokens=5,this.updateTokensDisplay(),nr(()=>Promise.resolve().then(()=>Zr),void 0,import.meta.url).then(e=>{var t;return(t=e.playCoinDrop)==null?void 0:t.call(e)})}awardExplorationToken(e){if(e&&!this.discoveredCabinets.has(e)){this.discoveredCabinets.add(e);try{localStorage.setItem("arcade_discovered",JSON.stringify([...this.discoveredCabinets]))}catch{}this.tokens+=2,this.updateTokensDisplay()}}initInteraction(){this.interaction=new $p(this.world.cabinets,(e,t)=>this.launchGame(e,t),e=>this.awardExplorationToken(e==null?void 0:e.id))}initOverlay(){this.overlay=new Zp(()=>{this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.clock.getDelta()})}initJukebox(){this.jukeboxModal=new Jp,this.musicHud=new Qp(()=>this.openJukebox()),Be.init()}initPointerLock(){const e=this.renderer.domElement;this.isPointerLocked=!1,this.camPitch=0,e.addEventListener("click",t=>{document.body.classList.contains("touch-device")||"ontouchstart"in window||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen||this.jukeboxModal&&this.jukeboxModal.isOpen||t.target.closest&&t.target.closest(".nopex-hud-header, .arcade-music-hud, .arcade-commands-dock, .arcade-hologram-card, .arcade-jukebox-modal")||document.pointerLockElement!==e&&e.requestPointerLock&&e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===e}),document.addEventListener("mousemove",t=>{if(!this.isPointerLocked||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen)return;const n=t.movementX||0,s=t.movementY||0;this.player.rotation-=n*.0032,this.player.targetRotation=this.player.rotation,this.camPitch=Math.max(-.2,Math.min(.35,(this.camPitch||0)-s*.0018))})}openJukebox(){var e;document.pointerLockElement&&((e=document.exitPointerLock)==null||e.call(document)),this.jukeboxModal&&(nr(()=>Promise.resolve().then(()=>Zr),void 0,import.meta.url).then(t=>t.playDopamineChime()),this.jukeboxModal.open())}launchGame(e,t){var n;if(t&&t.isJukebox){this.openJukebox();return}document.pointerLockElement&&((n=document.exitPointerLock)==null||n.call(document)),this.spendToken(),this.isZoomingIn=!0,this.zoomTarget=t,this.zoomProgress=0,setTimeout(()=>{this.overlay.open(e)},550)}teleportToCabinet(e){const t=this.world.cabinets.find(n=>n.game.id===e);t&&(this.player.clearNavigationTarget(),this.player.x=t.standSpot.x,this.player.z=t.standSpot.z,this.player.rotation=t.rotationY+Math.PI,this.player.targetRotation=this.player.rotation,this.interaction.update(this.player))}showDestinationPulse(e,t){this.destinationRing.position.set(e,.04,t),this.destinationRing.scale.set(.6,.6,.6),this.destinationRing.material.opacity=.9,this.destinationPulse=1}initTapToWalk(){let e=0,t=0,n=0;const s=o=>{e=performance.now(),t=o.clientX,n=o.clientY},r=o=>{const l=performance.now()-e,c=Math.abs(o.clientX-t),d=Math.abs(o.clientY-n);if(l>380||c>20||d>20||o.target.closest(".nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer"))return;const f=this.renderer.domElement.getBoundingClientRect(),p=(o.clientX-f.left)/f.width*2-1,_=-((o.clientY-f.top)/f.height)*2+1;this.raycaster.setFromCamera({x:p,y:_},this.camera);let x=null,m=1/0;for(const h of this.world.cabinets){const S=this.raycaster.intersectObjects(h.group.children,!0);S.length>0&&S[0].distance<m&&(m=S[0].distance,x=h)}if(x){this.showDestinationPulse(x.standSpot.x,x.standSpot.z),this.player.setNavigationTarget(x.standSpot.x,x.standSpot.z,()=>{this.interaction.update(this.player)});return}if(this.world.floorMesh){const h=this.raycaster.intersectObject(this.world.floorMesh);if(h.length>0){const S=h[0].point,b=this.world.roomBounds,y=Math.max(b.minX+.5,Math.min(b.maxX-.5,S.x)),A=Math.max(b.minZ+.5,Math.min(b.maxZ-.5,S.z));this.showDestinationPulse(y,A),this.player.setNavigationTarget(y,A,()=>{this.interaction.update(this.player)})}}},a=this.renderer.domElement;a.addEventListener("pointerdown",s),a.addEventListener("pointerup",r)}initMobileControls(){("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)&&document.body.classList.add("touch-device");const t=document.getElementById("arcade-joystick"),n=document.getElementById("joystick-thumb");if(!t||!n)return;let s=null,r=0,a=0;const o=45,l=t.querySelector(".arrow-up"),c=t.querySelector(".arrow-down"),d=t.querySelector(".arrow-left"),u=t.querySelector(".arrow-right"),f=(h,S)=>{l&&l.classList.toggle("active",S<-12),c&&c.classList.toggle("active",S>12),d&&d.classList.toggle("active",h<-12),u&&u.classList.toggle("active",h>12)},p=h=>{if(!(this.overlay&&this.overlay.isOpen))for(let S=0;S<h.changedTouches.length;S++){const b=h.changedTouches[S],y=t.getBoundingClientRect(),A=b.clientX>=y.left&&b.clientX<=y.right&&b.clientY>=y.top&&b.clientY<=y.bottom,w=b.clientX<=window.innerWidth*.55&&b.clientY>=window.innerHeight*.4;if(s===null&&(A||w)){if(b.target&&b.target.closest&&b.target.closest(".nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay"))continue;h.preventDefault(),s=b.identifier,A?(r=y.left+y.width/2,a=y.top+y.height/2):(r=b.clientX,a=b.clientY,t.style.left=`${Math.max(12,Math.min(window.innerWidth-130,r-y.width/2))}px`,t.style.bottom=`${Math.max(12,Math.min(window.innerHeight-130,window.innerHeight-a-y.height/2))}px`),t.classList.add("active"),this.player.clearNavigationTarget();break}}},_=h=>{if(s!==null)for(let S=0;S<h.changedTouches.length;S++){const b=h.changedTouches[S];if(b.identifier===s){h.preventDefault();let y=b.clientX-r,A=b.clientY-a;const w=Math.hypot(y,A);w>o&&(y=y/w*o,A=A/w*o),n.style.transform=`translate(${y}px, ${A}px)`,f(y,A),this.player.setJoystickVector(y/o,A/o);break}}},x=h=>{for(let S=0;S<h.changedTouches.length;S++)if(h.changedTouches[S].identifier===s){s=null,n.style.transform="translate(0px, 0px)",t.classList.remove("active"),f(0,0),this.player.setJoystickVector(0,0);break}};window.addEventListener("touchstart",p,{passive:!1}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",x),window.addEventListener("touchcancel",x),[{id:"dpad-up",vx:0,vy:-1},{id:"dpad-down",vx:0,vy:1},{id:"dpad-left",vx:-1,vy:0},{id:"dpad-right",vx:1,vy:0}].forEach(({id:h,vx:S,vy:b})=>{const y=document.getElementById(h);if(!y)return;const A=R=>{R.preventDefault(),this.player.clearNavigationTarget(),this.player.setJoystickVector(S,b),y.classList.add("pressed")},w=R=>{R.preventDefault(),this.player.setJoystickVector(0,0),y.classList.remove("pressed")};y.addEventListener("pointerdown",A),y.addEventListener("pointerup",w),y.addEventListener("pointerleave",w),y.addEventListener("pointercancel",w)})}onResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.onResize(),this.animate())}stop(){this.isRunning=!1}animate(){if(!this.isRunning||(requestAnimationFrame(()=>this.animate()),this.overlay&&this.overlay.isOpen))return;const e=Math.min(this.clock.getDelta(),.1),t=this.clock.getElapsedTime();if(this.world.update(t,this.player),this.destinationPulse>0){this.destinationPulse-=e*1.6;const n=.6+(1-Math.max(0,this.destinationPulse))*.9;this.destinationRing.scale.set(n,n,n),this.destinationRing.material.opacity=Math.max(0,this.destinationPulse)*.9,this.destinationPulse<=0&&(this.destinationRing.material.opacity=0)}if(this.overlay.isOpen||(this.player.update(e,this.world.roomBounds,this.world.cabinets),this.interaction.update(this.player)),this.isZoomingIn&&this.zoomTarget){const n=this.zoomTarget,s=n.rotationY,r=n.position.x+Math.sin(s)*.51,a=2.15,o=n.position.z+Math.cos(s)*.51,l=new O(r,a,o),c=Math.sin(s)*.975,d=.22,u=Math.cos(s)*.975,f=new O(r+c*1.35,a+d*1.35,o+u*1.35);this.camera.position.lerp(f,.16),this.camera.lookAt(l)}else{const n=this.camPitch||0,s=this.player.x,r=4+n*2.2,a=Math.min(26,this.player.z+6.2);this.camera.position.x+=(s-this.camera.position.x)*.14,this.camera.position.y+=(r-this.camera.position.y)*.14,this.camera.position.z+=(a-this.camera.position.z)*.14,this.camLookTarget||(this.camLookTarget=new O(this.player.x,1.4,this.player.z-1.2)),this.camLookTarget.x+=(this.player.x-this.camLookTarget.x)*.14,this.camLookTarget.y=1.4+n*3.5,this.camLookTarget.z+=(this.player.z-1.2-this.camLookTarget.z)*.14,this.camera.lookAt(this.camLookTarget)}this.renderer.render(this.scene,this.camera)}}const tm="https://gist.githubusercontent.com/marcuscaiado/a238a8db5b064579413c7a54aba6c840/raw/marcus-arcade-leaderboard.json";function wo(){const i=document.getElementById("arcade-3d-canvas-container"),e=document.getElementById("webgl-error");if(!i){console.error("Missing #arcade-3d-canvas-container");return}let t=null;try{t=new em(i,ba),t.start(),window.__ARCADE_ENGINE__=t,window.__MUSIC_MANAGER__=Be;const c=()=>{Be.unlockAndPlay()};window.addEventListener("pointerdown",c,{once:!0}),window.addEventListener("keydown",c,{once:!0}),window.addEventListener("touchstart",c,{once:!0})}catch(c){if(console.error("Fatal WebGL / Three.js Initialization Error:",c),e){e.style.display="block";const d=e.querySelector(".webgl-error-text");d&&(d.textContent="⚠️ Erro ao inicializar 3D: "+c.message)}return}const n=document.getElementById("teleport-select");n&&n.addEventListener("change",c=>{const d=c.target.value;d&&t&&(nr(()=>Promise.resolve().then(()=>Zr),void 0,import.meta.url).then(u=>u.playDopamineChime()),t.teleportToCabinet(d),n.blur())}),window.addEventListener("keydown",c=>{if(!(c.target&&(c.target.tagName==="INPUT"||c.target.tagName==="TEXTAREA"||c.target.tagName==="SELECT"))&&c.code==="KeyJ"&&!c.ctrlKey&&!c.altKey&&!c.metaKey){const d=document.getElementById("arcade-game-overlay");(!d||d.style.display==="none")&&t&&t.jukeboxModal&&t.jukeboxModal.open()}});const s=document.getElementById("arcade-ctrl-toggle"),r=document.getElementById("arcade-joystick"),a=document.getElementById("arcade-dpad");let o="joystick";s&&r&&a&&s.addEventListener("click",c=>{c.stopPropagation(),o==="joystick"?(o="dpad",r.style.display="none",a.style.display="flex",s.innerHTML="<span>🕹️ JOYSTICK</span>"):(o="joystick",r.style.display="block",a.style.display="none",s.innerHTML="<span>🎮 D-PAD</span>")});async function l(){window.__ARCADE_LEADERBOARDS__=window.__ARCADE_LEADERBOARDS__||{};try{const c=await fetch(`${tm}?_t=${Date.now()}`);if(c.ok){const d=await c.json();ba.forEach(u=>{let f=[];try{f=JSON.parse(localStorage.getItem(`arcade_lb_${u.id}`)||"[]")}catch{}const _=[...d[u.id]||[],...f].filter(m=>m&&m.name&&m.score);_.sort((m,h)=>h.score-m.score);const x=_[0];x&&(window.__ARCADE_LEADERBOARDS__[u.id]={topScore:x.score,topPilot:String(x.name).replace(/[^a-zA-Z0-9]/g,"").toUpperCase().substring(0,3)||"MRC"})})}}catch(c){console.warn("Could not sync cloud records:",c)}}l()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wo):wo();
