document.addEventListener('DOMContentLoaded',()=>{

    const pad=n=>String(n).padStart(2,'0');
    function clock(){
        const d=new Date(), date=`${d.getFullYear()} / ${pad(d.getMonth()+1)} / ${pad(d.getDate())}`, time=`${pad(d.getHours())} : ${pad(d.getMinutes())} : ${pad(d.getSeconds())}`;
        ['introDate','mainDate'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=date});
        ['introTime','mainTime'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=time});
    }
    clock();setInterval(clock,1000);

    const intro = document.getElementById('intro');
    const main = document.getElementById('main');
    const enter = document.getElementById('enterBtn');
    const music = document.getElementById('bgMusic');

    const MUSIC_ITEMS = [
        {
            file: 'assets/music/song01.mp3',
            title: 'Arabella',
            artist: 'Arctic Monkeys'
        },
        {
            file: 'assets/music/song02.mp3',
            title: 'Reincarnate',
            artist: 'Motionless In White'
        },
        {
            file: 'assets/music/song03.mp3',
            title: 'Other Side',
            artist: 'New Years Day'
        },
        {
            file: 'assets/music/song04.mp3',
            title: 'Knee Socks',
            artist: 'Arctic Monkeys'
        },
        {
            file: 'assets/music/song05.mp3',
            title: 'Afraid of the Dark',
            artist: 'Motionless In White'
        },
        {
            file: 'assets/music/song06.mp3',
            title: 'Fireside',
            artist: 'Arctic Monkeys'
        },
        {
            file: 'assets/music/song07.mp3',
            title: '505 - Favourite Worst Nightmare',
            artist: 'Arctic Monkeys'
        },
        {
            file: 'assets/music/song08.mp3',
            title: 'Do I Wanna Know?',
            artist: 'Arctic Monkeys'
        },
        {
            file: 'assets/music/song09.mp3',
            title: 'R U Mine?',
            artist: 'Arctic Monkeys'
        },
        {
            file: 'assets/music/song10.mp3',
            title: 'Eternally Yours',
            artist: 'Motionless In White'
        }
    ];

    let musicIndex = 0;
    let musicPlaying = false;

    const playlistItems = document.querySelectorAll('.playlist-item');

    function updatePlaylist(index){
        playlistItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function enterSpace(){
        if(!intro || !main) return;

        main.classList.remove('is-hidden');
        main.classList.add('main-enter');
        intro.classList.add('intro-exit');

        if(music){
            const musicPromise = music.play();
            if(musicPromise){
                musicPromise
                .then(() => {
                    musicPlaying = true;
                    if(typeof updateMusic === 'function') updateMusic();
                })
                .catch(() => {
                    musicPlaying = false;
                    if(typeof updateMusic === 'function') updateMusic();
                });
            }
        }

        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000);
    }

    if(enter) enter.addEventListener('click', enterSpace);

    document.addEventListener('keydown', event => {
        if(event.key === 'Enter') enterSpace();
    });

        function particles(id,count,speed){
            const c=document.getElementById(id);if(!c)return;const x=c.getContext('2d');let p=[];
            function resize(){const r=Math.min(devicePixelRatio||1,2);c.width=innerWidth*r;c.height=innerHeight*r;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';x.setTransform(r,0,0,r,0,0)}
            function init(){p=Array.from({length:count},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.6+.3,vx:(Math.random()-.5)*speed,vy:(Math.random()-.5)*speed,a:Math.random()*.55+.1}))}
            function draw(){x.clearRect(0,0,innerWidth,innerHeight);p.forEach(q=>{q.x+=q.vx;q.y+=q.vy;if(q.x<-10)q.x=innerWidth+10;if(q.x>innerWidth+10)q.x=-10;if(q.y<-10)q.y=innerHeight+10;if(q.y>innerHeight+10)q.y=-10;x.beginPath();x.arc(q.x,q.y,q.r,0,Math.PI*2);x.fillStyle=`rgba(239,23,77,${q.a})`;x.fill()});requestAnimationFrame(draw)}
            addEventListener('resize',()=>{resize();init()});resize();init();draw();
        }
        particles('particleCanvas',55,.22);particles('mainParticles',85,.28);

        const render=document.getElementById('makimaRender'),stage=document.getElementById('makimaStage');

        const MAKIMA_X = 10;
        const MAKIMA_Y = 510;

        addEventListener('mousemove',e=>{
            if(!render)return;
            const x=e.clientX/innerWidth-.5;
            const y=e.clientY/innerHeight-.5;
            render.style.transform=`translate3d(${x*13 + MAKIMA_X}px,${y*-9 + MAKIMA_Y}px,0)`;
            stage.style.transform=`translate3d(${x*-3}px,${y*-2}px,0)`;
        });

        document.querySelectorAll('[data-panel]').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.panel').forEach(p=>p.classList.remove('is-open'));document.getElementById('panel-'+t.dataset.panel)?.classList.add('is-open')}));
        document.querySelectorAll('[data-close-panel]').forEach(b=>b.addEventListener('click',()=>document.querySelectorAll('.panel').forEach(p=>p.classList.remove('is-open'))));
        document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.panel').forEach(p=>p.classList.remove('is-open'))});

        const GALLERY_ITEMS=[
            {image:'assets/gallery/01.jpg',title:'MAKIMA',description:'Control / Chainsaw Man'},
            {image:'assets/gallery/02.jpg',title:'DENJI',description:'Chainsaw / Devil Hunter'},
            {image:'assets/gallery/03.jpg',title:'POWER',description:'Blood / Fiend'},
            {image:'assets/gallery/04.jpg',title:'AKI',description:'Fox / Curse / Future'},
            {image:'assets/gallery/05.jpg',title:'KOBENI',description:'Public Safety'},
            {image:'assets/gallery/06.jpg',title:'HIMENO',description:'Ghost / Public Safety'},
            {image:'assets/gallery/07.jpg',title:'REZE',description:'Bomb / Chainsaw Man'},
            {image:'assets/gallery/08.jpg',title:'ANGEL',description:'Angel Devil'},
            {image:'assets/gallery/09.jpg',title:'QUANXI',description:'Bow / Hybrid'},
            {image:'assets/gallery/10.jpg',title:'POCHITA',description:'Chainsaw Devil'}
        ];
        const track=document.getElementById('galleryTrack'),gIndex=document.getElementById('galleryIndex'),gTotal=document.getElementById('galleryTotal'),gTitle=document.getElementById('galleryTitle'),gDesc=document.getElementById('galleryDescription');
        let current=0,dragStart=null;
        function buildGallery(){
            track.innerHTML='';
            GALLERY_ITEMS.forEach((it,i)=>{
                const card=document.createElement('article');card.className='gallery-card';card.dataset.index=i;
                const img=document.createElement('img');img.src=it.image;img.alt=it.title;img.draggable=false;img.onerror=()=>{img.style.background='radial-gradient(circle,#7c0b2c,#090308 65%)';img.removeAttribute('src')};
                const label=document.createElement('div');label.className='card-label';label.textContent=it.title;card.append(img,label);
                card.addEventListener('click',()=>{current=i;updateGallery()});track.appendChild(card);
            });
            gTotal.textContent=String(GALLERY_ITEMS.length).padStart(2,'0');updateGallery();
        }
        function updateGallery(){
            const cards=[...document.querySelectorAll('.gallery-card')],total=cards.length;
            cards.forEach((card,i)=>{
                let o=i-current;if(o>total/2)o-=total;if(o<-total/2)o+=total;const a=Math.abs(o),s=Math.sign(o);
                const x=o*150,z=-a*115,scale=a===0?1:Math.max(.58,1-a*.12),rot=s*Math.min(34,a*13),opacity=a>3?0:Math.max(.22,1-a*.23),blur=a===0?0:Math.min(3,a*.8),y=a===0?0:Math.min(45,a*12);
                card.style.transform=`translate3d(${x}px,${y}px,${z}px) rotateY(${rot}deg) scale(${scale})`;card.style.opacity=opacity;card.style.filter=`blur(${blur}px)`;card.style.zIndex=100-a;card.classList.toggle('active',a===0);
            });
            const it=GALLERY_ITEMS[current];if(it){gIndex.textContent=String(current+1).padStart(2,'0');gTitle.textContent=it.title;gDesc.textContent=it.description}
        }
        function next(){current=(current+1)%GALLERY_ITEMS.length;updateGallery()}function prev(){current=(current-1+GALLERY_ITEMS.length)%GALLERY_ITEMS.length;updateGallery()}
        document.querySelector('.gallery-next').addEventListener('click',next);document.querySelector('.gallery-prev').addEventListener('click',prev);
        document.addEventListener('keydown',e=>{if(!document.getElementById('panel-gallery').classList.contains('is-open'))return;if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev()});
        track.addEventListener('wheel',e=>{e.preventDefault();e.deltaY>0?next():prev()},{passive:false});
        track.addEventListener('pointerdown',e=>{dragStart=e.clientX;track.setPointerCapture?.(e.pointerId)});
        track.addEventListener('pointerup',e=>{if(dragStart===null)return;const d=e.clientX-dragStart;if(Math.abs(d)>45)d<0?next():prev();dragStart=null});
        buildGallery();

        const play = document.getElementById('musicPlay');
        const progress = document.getElementById('musicProgress');
        const disc = document.querySelector('.music-disc');
        const bigVisualizer = document.getElementById('musicVisualizer');
        const miniEqualizer = document.getElementById('miniEqualizer');
        const progressBar = document.getElementById('musicProgressBar');
        const musicCurrentTime = document.getElementById('musicCurrentTime');
        const musicDuration = document.getElementById('musicDuration');
        const musicTitle = document.getElementById('musicTitle');
        const musicArtist = document.getElementById('musicArtist');
        const miniSongName = document.getElementById('miniSongName');
        const musicPrevButton = document.getElementById('musicPrev');
        const musicNextButton = document.getElementById('musicNext');

        let visualizerFrame = null;

        function formatMusicTime(seconds){
            if(!Number.isFinite(seconds) || seconds < 0) return '0:00';
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${String(remainingSeconds).padStart(2,'0')}`;
        }

        function updateMusicProgress(){
            if(!music || !progress) return;
            if(!Number.isFinite(music.duration) || music.duration <= 0){
                progress.style.width = '0%';
                return;
            }
            const percent = (music.currentTime / music.duration) * 100;
            progress.style.width = `${Math.max(0, Math.min(100, percent))}%`;
        }

        function updateMusicTime(){
            if(!music) return;
            if(musicCurrentTime) musicCurrentTime.textContent = formatMusicTime(music.currentTime);
            if(musicDuration && Number.isFinite(music.duration) && music.duration > 0){
                musicDuration.textContent = formatMusicTime(music.duration);
            }
            updateMusicProgress();
        }

        function updateMusic(){
            musicPlaying = !!music && !music.paused && !music.ended;
            if(play) play.textContent = musicPlaying ? 'Ⅱ' : '▶';
            if(disc) disc.classList.toggle('playing', musicPlaying);

            if(miniEqualizer){
                miniEqualizer.classList.toggle('is-playing', musicPlaying);
                miniEqualizer.querySelectorAll('i').forEach(bar => {
                    bar.style.setProperty('animation-play-state', musicPlaying ? 'running' : 'paused', 'important');
                });
            }

            if(bigVisualizer) bigVisualizer.classList.toggle('active', musicPlaying);
            if(!musicPlaying) stopBigVisualizer();
        }

        function animateBigVisualizer(){
            if(!music || music.paused || music.ended){
                stopBigVisualizer();
                return;
            }

            if(bigVisualizer){
                const bars = bigVisualizer.querySelectorAll('span');
                bars.forEach((bar,index) => {
                    const wave = Math.sin(performance.now() * 0.004 + index * 0.8);
                    const wave2 = Math.sin(performance.now() * 0.007 + index * 1.35);
                    const value = ((wave + 1) * 0.5) * 0.55 + ((wave2 + 1) * 0.5) * 0.45;
                    const height = 5 + value * 43;
                    bar.style.height = `${height}px`;
                    bar.style.transform = `scaleY(${0.75 + value * 0.35})`;
                    bar.style.opacity = '1';
                });
            }

            visualizerFrame = requestAnimationFrame(animateBigVisualizer);
        }

        function startBigVisualizer(){
            if(!music || visualizerFrame) return;
            animateBigVisualizer();
        }

        function stopBigVisualizer(){
            if(visualizerFrame){
                cancelAnimationFrame(visualizerFrame);
                visualizerFrame = null;
            }
            if(bigVisualizer){
                bigVisualizer.querySelectorAll('span').forEach(bar => {
                    bar.style.height = '4px';
                    bar.style.transform = 'scaleY(.25)';
                    bar.style.opacity = '.55';
                });
            }
            if(miniEqualizer){
                miniEqualizer.querySelectorAll('i').forEach(bar => {
                    bar.style.height = '3px';
                    bar.style.setProperty('animation-play-state', 'paused', 'important');
                });
            }
        }

        function loadMusic(index, autoplay = false){
            if(!music || !MUSIC_ITEMS.length) return;

            musicIndex = (index + MUSIC_ITEMS.length) % MUSIC_ITEMS.length;
            const song = MUSIC_ITEMS[musicIndex];
            updatePlaylist(musicIndex);

            music.pause();
            musicPlaying = false;
            updateMusic();
            stopBigVisualizer();

            music.src = song.file;
            music.load();

            if(musicTitle) musicTitle.textContent = song.title;
            if(musicArtist) musicArtist.textContent = song.artist;
            if(miniSongName) miniSongName.textContent = song.title;
            if(progress) progress.style.width = '0%';
            if(musicCurrentTime) musicCurrentTime.textContent = '0:00';
            if(musicDuration) musicDuration.textContent = '0:00';

            const playLoadedSong = () => {
                if(!autoplay) return;
                music.play()
                .then(() => {
                    musicPlaying = true;
                    updateMusic();
                    startBigVisualizer();
                })
                .catch(error => {
                    musicPlaying = false;
                    updateMusic();
                    console.error('ERROR AL REPRODUCIR:', song.file, error);
                });
            };

            if(autoplay){
                if(music.readyState >= 2) playLoadedSong();
                else music.addEventListener('canplay', playLoadedSong, {once:true});
            }
        }

        if(play && music){
            play.addEventListener('click', () => {
                if(music.paused){
                    music.play()
                    .then(() => {
                        musicPlaying = true;
                        updateMusic();
                        startBigVisualizer();
                    })
                    .catch(error => console.error('ERROR AL REPRODUCIR:', music.src, error));
                }else{
                    music.pause();
                    musicPlaying = false;
                    updateMusic();
                    stopBigVisualizer();
                }
            });
        }

        if(musicPrevButton) musicPrevButton.addEventListener('click', () => loadMusic(musicIndex - 1, true));
        if(musicNextButton) musicNextButton.addEventListener('click', () => loadMusic(musicIndex + 1, true));
        if(music) music.addEventListener('ended', () => loadMusic(musicIndex + 1, true));

        if(music){
            music.addEventListener('loadedmetadata', updateMusicTime);
            music.addEventListener('durationchange', updateMusicTime);
            music.addEventListener('loadeddata', updateMusicTime);
            music.addEventListener('timeupdate', updateMusicTime);
            music.addEventListener('play', () => { musicPlaying = true; updateMusic(); startBigVisualizer(); });
            music.addEventListener('playing', () => { musicPlaying = true; updateMusic(); startBigVisualizer(); });
            music.addEventListener('pause', () => { musicPlaying = false; updateMusic(); stopBigVisualizer(); });
            music.addEventListener('ended', () => { musicPlaying = false; updateMusic(); stopBigVisualizer(); });
            music.addEventListener('error', () => console.error('ERROR CARGANDO AUDIO:', music.src, music.error));
        }

        if(progressBar){
            let dragging = false;

            function seekMusic(event){
                if(!music) return;
                const duration = music.duration;
                if(!Number.isFinite(duration) || duration <= 0) return;
                const rect = progressBar.getBoundingClientRect();
                if(!rect.width) return;

                const x = event.clientX - rect.left;
                let percent = Math.max(0, Math.min(1, x / rect.width));

                music.currentTime = percent * duration;
                updateMusicProgress();
                updateMusicTime();
            }

            progressBar.addEventListener('click', seekMusic);

            progressBar.addEventListener('pointerdown', event => {
                if(!Number.isFinite(music.duration) || music.duration <= 0) return;
                dragging = true;
                event.preventDefault();
                progressBar.setPointerCapture?.(event.pointerId);
                seekMusic(event);
            });

            progressBar.addEventListener('pointermove', event => {
                if(!dragging) return;
                event.preventDefault();
                seekMusic(event);
            });

            progressBar.addEventListener('pointerup', event => {
                if(!dragging) return;
                event.preventDefault();
                seekMusic(event);
                dragging = false;
                progressBar.releasePointerCapture?.(event.pointerId);
            });

            progressBar.addEventListener('pointercancel', () => dragging = false);
            progressBar.addEventListener('lostpointercapture', () => dragging = false);
        }

        if(miniEqualizer){
            miniEqualizer.querySelectorAll('i').forEach(bar => {
                bar.style.height = '3px';
                bar.style.setProperty('animation-play-state', 'paused', 'important');
            });
        }

        playlistItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = Number(item.dataset.song);
                if(Number.isNaN(index)) return;
                loadMusic(index, true);
            });
        });

        loadMusic(0, false);
        stopBigVisualizer();
        updateMusic();
});

const mediaItems = [
    {
        video: 'assets/media/media01.mp4',
        type: 'ANIME / 01',
        title: 'Chainsaw Man',
        quote: 'Release: 2022',
        images:['assets/media/images/media01-01.jpg','assets/media/images/media01-02.jpg','assets/media/images/media01-03.jpg']
    },
{
    video: 'assets/media/media02.mp4',
    type: 'ANIME / 02',
    title: 'Shingeki no Kyojin',
    quote: 'Release: 2013 ',
    images:['assets/media/images/media02-01.jpg','assets/media/images/media02-02.jpg','assets/media/images/media02-03.jpg']
},
{
    video: 'assets/media/media03.mp4',
    type: 'ANIME / 03',
    title: 'Jujutsu Kaisen',
    quote: 'Release: 2020',
    images:['assets/media/images/media03-01.jpg','assets/media/images/media03-02.jpg','assets/media/images/media03-03.jpg']
},
{
    video: 'assets/media/media04.mp4',
    type: 'FILM / 04',
    title: 'Michael',
    quote: 'Release: 2026.',
    images:['assets/media/images/media04-01.jpg','assets/media/images/media04-02.jpg','assets/media/images/media04-03.jpg']
},
{
    video: 'assets/media/media05.mp4',
    type: 'FILM HORROR / 05',
    title: 'SMILE',
    quote: 'Release: 2022 ',
    images:['assets/media/images/media05-01.jpg','assets/media/images/media05-02.jpg','assets/media/images/media05-03.jpg']
},
{
    video: 'assets/media/media06.mp4',
    type: 'FILM HORROR / 06',
    title: 'Backrooms',
    quote: 'Release: 2026 ',
    images:['assets/media/images/media06-01.jpg','assets/media/images/media06-02.jpg','assets/media/images/media06-03.jpg']
},
{
    video: 'assets/media/media07.mp4',
    type: 'FILM HORROR / 07',
    title: 'Insidious',
    quote: 'Release: 2010',
    images:['assets/media/images/media07-01.jpg','assets/media/images/media07-02.jpg','assets/media/images/media07-03.jpg']
}
];

let mediaIndex = 0;
const mediaVideo = document.getElementById('mediaVideo');
const mediaVideoSource = document.getElementById('mediaVideoSource');
const mediaCurrent = document.getElementById('mediaCurrent');
const mediaType = document.getElementById('mediaType');
const mediaTitle = document.getElementById('mediaTitle');
const mediaQuote = document.getElementById('mediaQuote');
const mediaImage1 = document.getElementById('mediaImage1');
const mediaImage2 = document.getElementById('mediaImage2');
const mediaImage3 = document.getElementById('mediaImage3');
const mediaImages = [mediaImage1, mediaImage2, mediaImage3];
const mediaPrev = document.getElementById('mediaPrev');
const mediaNext = document.getElementById('mediaNext');

function updateMediaImages(item){
    if(!item) return;
    const images = Array.isArray(item.images) ? item.images : [];
    mediaImages.forEach((img, index) => {
        if(!img) return;
        const src = images[index];
        if(src){
            img.src = src;
            img.alt = `${item.title} // IMAGE ${index + 1}`;
            img.parentElement.style.display = 'block';
        }else{
            img.removeAttribute('src');
            img.parentElement.style.display = 'none';
        }
    });
}

function updateMedia(index, direction = 1){
    if(!mediaItems.length) return;

    const nextIndex = (index + mediaItems.length) % mediaItems.length;
    const item = mediaItems[nextIndex];
    const frame = document.querySelector('.media-video-frame');

    if(!frame || !mediaVideo || !mediaVideoSource){
        mediaIndex = nextIndex;
        updateMediaImages(item);
        if(mediaCurrent) mediaCurrent.textContent = String(mediaIndex + 1).padStart(2,'0');
        if(mediaType) mediaType.textContent = item.type;
        if(mediaTitle) mediaTitle.textContent = item.title;
        if(mediaQuote) mediaQuote.textContent = item.quote;
        return;
    }

    frame.classList.remove('media-moving', 'slide-out-up', 'slide-out-down', 'slide-in-from-top', 'slide-in-from-bottom');
    void frame.offsetWidth;

    frame.classList.add('media-moving');
    if(direction > 0) frame.classList.add('slide-out-up');
    else frame.classList.add('slide-out-down');

    setTimeout(() => {
        mediaIndex = nextIndex;
        updateMediaImages(item);

        if(mediaCurrent) mediaCurrent.textContent = String(mediaIndex + 1).padStart(2,'0');
        if(mediaType) mediaType.textContent = item.type;
        if(mediaTitle) mediaTitle.textContent = item.title;
        if(mediaQuote) mediaQuote.textContent = item.quote;

        mediaVideo.pause();
        mediaVideoSource.src = item.video;
        mediaVideo.load();
        mediaVideo.muted = true;

        const playPromise = mediaVideo.play();
        if(playPromise !== undefined){
            playPromise.catch(() => console.warn('Autoplay bloqueado.'));
        }

        frame.classList.remove('slide-out-up', 'slide-out-down');
        void frame.offsetWidth;

        if(direction > 0) frame.classList.add('slide-in-from-bottom');
        else frame.classList.add('slide-in-from-top');

        setTimeout(() => {
            frame.classList.remove('media-moving', 'slide-in-from-top', 'slide-in-from-bottom');
        },460);
    },450);
}

function nextMedia(){ updateMedia(mediaIndex + 1); }
function previousMedia(){ updateMedia(mediaIndex - 1); }

if(mediaNext) mediaNext.addEventListener('click', nextMedia);
if(mediaPrev) mediaPrev.addEventListener('click', previousMedia);

document.addEventListener('keydown', (event) => {
    const futurePanel = document.getElementById('panel-future');
    if(!futurePanel || !futurePanel.classList.contains('is-open')) return;
    if(event.key === 'ArrowDown'){ event.preventDefault(); nextMedia(); }
    if(event.key === 'ArrowUp'){ event.preventDefault(); previousMedia(); }
});

updateMediaImages(mediaItems[0]);
updateMedia(0);

function setupParallax(element, options = {}){
    if(!element) return;
    const intensityX = options.x ?? 8;
    const intensityY = options.y ?? 6;

    element.addEventListener('mousemove', event => {
        const rect = element.getBoundingClientRect();
        if(!rect.width || !rect.height) return;

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const moveX = (x - 0.5) * intensityX;
        const moveY = (y - 0.5) * intensityY;

        element.style.setProperty('--px', `${moveX}px`);
        element.style.setProperty('--py', `${moveY}px`);
        element.classList.add('is-hovering');
    });

    element.addEventListener('mouseleave', () => {
        element.style.setProperty('--px', '0px');
        element.style.setProperty('--py', '0px');
        element.classList.remove('is-hovering');
    });
}

const pochitaParallax = document.querySelector('.music-pochita');
setupParallax(pochitaParallax, { x:10, y:8 });

const mediaFrame = document.querySelector('.media-video-frame');
if(mediaFrame){
    mediaFrame.addEventListener('mousemove', event => {
        const rect = mediaFrame.getBoundingClientRect();
        if(!rect.width || !rect.height) return;

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const moveX = (x - 0.5) * 7;
        const moveY = (y - 0.5) * 5;

        mediaFrame.style.setProperty('--media-px', `${moveX}px`);
        mediaFrame.style.setProperty('--media-py', `${moveY}px`);
        mediaFrame.classList.add('is-hovering');
    });

    mediaFrame.addEventListener('mouseleave', () => {
        mediaFrame.style.setProperty('--media-px', '0px');
        mediaFrame.style.setProperty('--media-py', '0px');
        mediaFrame.classList.remove('is-hovering');
    });
}

const galleryTrack = document.getElementById('galleryTrack');
if(galleryTrack){
    galleryTrack.addEventListener('mousemove', event => {
        const card = event.target.closest('.gallery-card');
        if(!card) return;
        const image = card.querySelector('img');
        if(!image) return;

        const rect = card.getBoundingClientRect();
        if(!rect.width || !rect.height) return;

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const moveX = (x - 0.5) * 8;
        const moveY = (y - 0.5) * 6;

        image.style.setProperty('--gallery-px', `${moveX}px`);
        image.style.setProperty('--gallery-py', `${moveY}px`);
        card.classList.add('is-hovering');
    });

    galleryTrack.addEventListener('mouseleave', () => {
        galleryTrack.querySelectorAll('.gallery-card img').forEach(image => {
            image.style.setProperty('--gallery-px', '0px');
            image.style.setProperty('--gallery-py', '0px');
        });
        galleryTrack.querySelectorAll('.gallery-card').forEach(card => card.classList.remove('is-hovering'));
    });
}
