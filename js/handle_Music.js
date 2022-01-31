// listSongs: Body & Overlay 
const listSongs_songs_main = take_all("#listSongs_songs_main"); 
console.log(listSongs_songs_main)

// listSongs:
const playRandom = take_one('.playRandom')
const options = take_one('.options')
const listSongs_text = take_one('.listSongs_text')

// result
const result_found = take_one('.result_found')
const result_not_found = take_one('.result_not_found')
const result_found_text = take_one('.result_found_text'),
result_not_found_text = take_one('.result_not_found_text')

// Side
const side_input = take_one('.side_input')

// Footer
const info_image = take_one('.image img')
const btn_play_pause = take_all('.btn_play-pause')


// Overlay
const overlay_info_name = take_one('.overlay_info--song_name')
const overlay_info_img = take_one('.overlay_info--img img')
const overlay_info_details = take_one('.overlay_info--song_details')
const overlay_space_img = take_one('.overlay_space_img img')

// Audio
const audio = take_one('#audio')
const listAudio = take_one('.listAudio')

// Time progress - Current time & Total time
const time_progress = take_all('#time_progress'),
time_progress_nav = take_all('.time_progress_nav'),
time_progress_nav_update = take_all('.time_progress_nav_update'),
time_current = take_all('.time_current'),
time_total = take_all('.time_total')

// Volume 
const volume__range = take_all('.volume__range'),
volumn_process_nav = take_all('.volumn_process_nav'),
volumn_process_update = take_all('.volumn_process_update'),
volume_icon_contact = take_all('.volume_icon_contact i'),
volume_up = take_all('.bi-volume-up'),
volume_mute = take_all('.bi-volume-mute')

// Btn controls: prev-forward && random-loop 
const prev = take_all('.prev')
const forward = take_all('.forward')
const random = take_all('.random')
const loop = take_all('.loop')

const app = {


    // First song
    currentIndex: 0,

    // Boolean value
    isPlaying: false,
    isRandom: false,
    isLoop: false,

    // All of the songs
    songs: [
        {
            name: "abcdefu",
            author: "GAYLE",
            album: "Album không xác định",
            time: 2022,
            type: "Thể loại không xác định",
            img: "abcdefu",
            path: "abcdefu - GAYLE"
        },
        {
            name: "Outside - 张钰琪",
            author: "NHO NGUYEN REMIX",
            album: "Album không xác định",
            time: 2022,
            type: "Thể loại không xác định",
            img: "outside",
            path: "Outside - 张钰琪 NHO NGUYEN REMIX"
        },
        {
            name: "Save Your Tears",
            author: "The Weeknd",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "save your tears",
            path: "Save Your Tears - The Weeknd"
        },
        {
            name: "Numb The Pain",
            author: "Clarx Catas Le Malls CHENDA Anikdote",
            album: "Album không xác định",
            time: 2022,
            type: "Thể loại không xác định",
            img: "numb the pain",
            path: "Numb The Pain - Clarx Catas Le Malls CHENDA Anikdote"
        },
        {
            name: "Love Yourself",
            author: "Justin Bieber",
            album: "Purpose",
            time: 2022,
            type: "Thể loại không xác định",
            img: "love yourself",
            path: "Love Yourself - Justin Bieber"
        },
        {
            name: "Dead Man Walking",
            author: "Chuxx Morris",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "dead man walking",
            path: "Dead Man Walking - Chuxx Morris"
        },
        {
            name: "The Search",
            author: "NF",
            album: "The Search",
            time: 2021,
            type: "Thể loại không xác định",
            img: "the search",
            path: "The Search - NF"
        },
        {
            name: "It'll Be Okay",
            author: "Shawn Mendes",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "itll be okay",
            path: "Itll Be Okay - Shawn Mendes"
        },
        {
            name: "Dynasty",
            author: "MIIA",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "dynasty",
            path: "Dynasty - MIIA"
        },
        {
            name: "I Love You So",
            author: "The Walters",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "I Love You So",
            path: "I Love You So - The Walters"
        },
        {
            name: "Counting Stars",
            author: "OneRepublic",
            album: "Native",
            time: 2021,
            type: "Thể loại không xác định",
            img: "Counting Stars",
            path: "Counting Stars - OneRepublic"
        },
        {
            name: "Photograph",
            author: "Ed Sheeran",
            album: "=",
            time: 2021,
            type: "Thể loại không xác định",
            img: "Photograph",
            path: "Photograph - Ed Sheeran"
        },
        {
            name: "Castle On The Hill",
            author: "Ed Sheeran",
            album: "=",
            time: 2021,
            type: "Thể loại không xác định",
            img: "Castle On The Hill",
            path: "Castle On The Hill - Ed Sheeran"
        },
        {
            name: "Overpass Graffiti",
            author: "Ed Sheeran",
            album: "=",
            time: 2021,
            type: "Thể loại không xác định",
            img: "overpass graffiti",
            path: "Overpass Graffiti - Ed Sheeran"
        },
        {
            name: "Bad Habits",
            author: "Ed Sheeran",
            album: "=",
            time: 2021,
            type: "Thể loại không xác định",
            img: "bad habits",
            path: "Bad Habits - Ed Sheeran"
        },
        {
            name: "Shivers",
            author: "Ed Sheeran",
            album: "=",
            time: 2021,
            type: "Thể loại không xác định",
            img: "shivers",
            path: "Shivers - Ed Sheeran"
        },
        {
            name: "Lovely",
            author: "Billie Eilish",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "Lovely",
            path: "Lovely - Billie Eilish"
        },
        {
            name: "Everybody Dies In Their Nightmares",
            author: "XXXTENTACION",
            album: "17",
            time: 2021,
            type: "Thể loại không xác định",
            img: "Everybody Dies In Their Nightmares",
            path: "Everybody Dies In Their Nightmares - XXXTENTACION"
        },
        {
            name: "Crazy",
            author: "Gnarls Barkley",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "crazy",
            path: "Crazy - Gnarls Barkley"
        },
        {
            name: "Em Đây Chẳng Phải Thúy Kiều",
            author: "Hoàng Thùy Linh",
            album: "Album không xác định",
            time: 2021,
            type: "Thể loại không xác định",
            img: "em day dau phai thuy kieu",
            path: "Em Đây Chẳng Phải Thúy Kiều [ Surick Remix ] - Hoàng Thùy Linh"
        }
    ],
    
    songSort_default: [],
    songSort_time: [],
    songSort_name: [],
    songSort_author: [],
    songSort_album: [],
    
    backup_songs: function() {
        this.songSort_default = this.songs
    },

    defind_sort_list: function(value) {
        const _this = this
        var tg;
        this.songs = this.songSort_default
        
        function sort_time() {
            // songSort_time
            var check = false
            if(_this.songSort_time.length == 0) {
                for(let i = 0; i< _this.songs.length; i++) {
                    _this.songSort_time.push(_this.songs[i])
                }
                for(var i = 0; i < _this.songSort_time.length - 1; i++) {
                    for(var j = i + 1; j < _this.songSort_time.length; j++) {
                        if(_this.songSort_time[i].time < _this.songSort_time[j].time) {
                            tg = _this.songSort_time[j]
                            _this.songSort_time[j] = _this.songSort_time[i]
                            _this.songSort_time[i] = tg
                            check = true
                        }
                    }
                }
            } else {
                check = true
            }
            
            if(check) {
                _this.songs = _this.songSort_time
            } else {
                sort_name()
            }
        }
        function sort_name() {
            // songSort_name
            if(_this.songSort_name.length == 0) {
                for(let i = 0; i< _this.songs.length; i++) {
                    _this.songSort_name.push(_this.songs[i])
                }
            }
            for(var i = 0; i < _this.songSort_name.length - 1; i++) {
                for(var j = i + 1; j < _this.songSort_name.length; j++) {
                    if(_this.songSort_name[i].name.localeCompare(_this.songSort_name[j].name) > 0) {
                        tg = _this.songSort_name[j]
                        _this.songSort_name[j] = _this.songSort_name[i]
                        _this.songSort_name[i] = tg
                    }
                }
            }
            _this.songs = _this.songSort_name
        }
        function sort_author() {
            // songSort_author

            var check = false
            if(_this.songSort_author.length == 0) {
                for(let i = 0; i< _this.songs.length; i++) {
                    _this.songSort_author.push(_this.songs[i])
                }
                for(var i = 0; i < _this.songSort_author.length - 1; i++) {
                    for(var j = i + 1; j < _this.songSort_author.length; j++) {
                        if(_this.songSort_author[i].author.localeCompare(_this.songSort_author[j].author) > 0) {
                            tg = _this.songSort_author[j]
                            _this.songSort_author[j] = _this.songSort_author[i]
                            _this.songSort_author[i] = tg
                            check = true
                        }
                    }
                }
            } else {
                check = true
            }
            

            if(check) {
                _this.songs = _this.songSort_author
            } else {
                sort_name()
            }
        }
        function sort_album() {
            // songSort_album
            var check = false
            if(_this.songSort_album.length == 0) {
                for(let i = 0; i< _this.songs.length; i++) {
                    _this.songSort_album.push(_this.songs[i])
                }
                for(var i = 0; i < _this.songSort_album.length - 1; i++) {
                    for(var j = i + 1; j < _this.songSort_album.length; j++) {
                        if(_this.songSort_album[i].album.localeCompare(_this.songSort_album[j].album) > 0) {
                            tg = _this.songSort_album[j]
                            _this.songSort_album[j] = _this.songSort_album[i]
                            _this.songSort_album[i] = tg
                            check = true
                        }
                    }
                }
            } else {
                check = true
            }

            if(check) {
                _this.songs = _this.songSort_album
            } else {
                sort_name()
            }
        }

        if(value == "default") {
            _this.songs = _this.songSort_default
            _this.render()
        } else if(value == "time") {
            sort_time()
            _this.render()
        } else if(value == "name") {
            sort_name()
            _this.render()
        } else if(value == "author") {
            sort_author()
            _this.render()
        } else if(value == "album") {
            sort_album()
            _this.render()
        }
    },

    render_authors: function() {
        const listSongs_authors_list = take_one('.listSongs_authors_list')
        const authors_temporary = []
        for(let i = 0; i < this.songSort_default.length ; i++) {
            authors_temporary.push(this.songSort_default[i].author)
        }

        // Filter trả về mảng phần tử thỏa mãn điều kiện || Find chỉ chả về 1 phần tử
        var authors = authors_temporary.filter(function(item, index) {
            return authors_temporary.indexOf(item) === index 
        })

        const htmls = authors.map(function(author, index) {
            return `
                <div class="listSongs_authors_content">
                    <div class="listSongs_authors_content_img">
                        <img src="./a_imgs/Authors/${author}.jpg" alt="">
                        <div class="listSongs_authors_content_icons">
                            <div title="Phát tất cả" class="listSongs_authors_content_icons--play"><i class="bi bi-play"></i></div>
                            <div title="Thêm vào" class="listSongs_authors_content_icons--plus"><i class="bi bi-plus-lg"></i></div>
                        </div>
                    </div>
                    <div class="listSongs_authors_content_name">${author}</div>
                </div>
            `
        })
        listSongs_authors_list.innerHTML = htmls.join("")
    },

    render_albums: function() {
        const listSongs_albums_list = take_one('.listSongs_albums_list')
        const albums_temporary = []
        for(let i = 0; i < this.songSort_default.length ; i++) {
            albums_temporary.push(this.songSort_default[i].album)
        }
        
        // Filter trả về mảng phần tử thỏa mãn điều kiện || Find chỉ chả về 1 phần tử
        var albums = albums_temporary.filter(function(item, index) {
            return albums_temporary.indexOf(item) === index 
        })
        const htmls = albums.map(function(album, index) {
            return `
                <div class="listSongs_albums_content">
                    <div class="listSongs_albums_content_img">
                        <img src="./a_imgs/Albums/${album}.jpg" alt="">
                        <div class="listSongs_albums_content_icons">
                            <div title="Phát tất cả" class="listSongs_albums_content_icons--play"><i class="bi bi-play"></i></div>
                            <div title="Thêm vào" class="listSongs_albums_content_icons--plus"><i class="bi bi-plus-lg"></i></div>
                        </div>
                    </div>
                    <div class="listSongs_albums_content_name">${album}</div>
                </div>
            `
        })
        listSongs_albums_list.innerHTML = htmls.join("")
    },

    render: function() {

        const htmls = this.songs.map(function(song, index) {
            return `
            <div class="song "  data-index="${index}"> 
                <div class="song_responsiveDetails song_playing">
                    <div class="song_plaing_details">
                        
                        <div class="song_name">${song.name}</div>
                    </div>
                    <p class="song_details">${song.author} • ${song.album}</p>
                </div>
                <div class="song_author">${song.author}</div>
                <div class="song_album">${song.album}</div>
                <div class="song_date">${song.time}</div>
                <div class="song_type">${song.type}</div>
                <div class="song_time"></div>
                <audio class="audio_inSong" src="./b_songs/${song.path}.mp3"></audio>
            </div>
        `
        })
        
        
        
        // Inner HTML to 2 list song from: Body & Overlay
        listSongs_songs_main.forEach(function(list) {
            list.innerHTML = htmls.join("")
        })
        
        this.load_duration_songs()
    },

    // Xét cho object app thêm 1 thuộc tính là currentSong
    // Lấy giá trị của bài hát hiện tại
    defineProperties: function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.songs[this.currentIndex]
            }
        }) 
    },

    handleEvents: function() {
        const _this = this
        var isMoving = false

        // Xử lý random play: listSongs
        listSongs_text.innerHTML = `Phát ngẫu nhiên tất cả (${this.songSort_default.length})`

        // Xử lý CD quay: Footer & Overlay
        const info_image_animate = info_image.animate([{transform: 'rotate(360deg)'}], {
            duration: 12000,
            iterations: Infinity
        })
        const overlay_info_img_animate = overlay_info_img.animate([{transform: 'rotate(360deg)'}], {
            duration: 12000,
            iterations: Infinity
        })
        info_image_animate.pause() // Footer img
        overlay_info_img_animate.pause() // Overlay img
        
        // Xử lý khi click play
        btn_play_pause.forEach(function(btn){
            // Phát nhạc
            btn.onclick = function() {
                if(_this.isPlaying) {
                    audio.pause()                
                    return
                } else {
                    audio.play()                
                }
            }
        })

    
        // ================================AUDIO================================
        // Duration current song
        audio.onloadeddata = function() {
            const time_totalTimes = take_all('.time_totalTime')
            const duration = audio.duration
            let minutes =  Math.floor(duration / 60)
            let seconds = Math.floor(duration % 60)
            time_totalTimes.forEach(function(time_totalTime) {
                time_totalTime.textContent = `${minutes}:${seconds >= 10 ? seconds: "0"+seconds}`
            })
                
        }
        // Set isPlaying % UI
        audio.onplay = function() {
            _this.isPlaying = true
            for(var i = 0; i < btn_play_pause.length; i++) {
                btn_play_pause[i].classList.add('playing')
            }
            info_image_animate.play() 
            overlay_info_img_animate.play()
        }
        audio.onpause = function() { 
            _this.isPlaying = false
            for(var i = 0; i < btn_play_pause.length; i++) {
                btn_play_pause[i].classList.remove('playing')
            }
            info_image_animate.pause() 
            overlay_info_img_animate.pause()
        }
        // Tiến độ bài hát thay đổi - Time Update
        audio.ontimeupdate = function() {
            if(audio.duration) {
                // If it's not moving 
                if(isMoving == false) {
                    time_progress
                    const currentProgress = (audio.currentTime / audio.duration) * 100
                    // chiều dài thẻ div
                    time_progress_nav_update.forEach(function(e_nav_update) {
                        e_nav_update.style.width = currentProgress + '%'
                    })

                    // change contentText 
                    let minutes = Math.floor(audio.currentTime / 60)
                    let seconds = Math.floor(audio.currentTime % 60)
                    time_current.forEach(function(e) {
                        e.textContent = `${minutes}:${seconds >= 10 ? seconds: "0"+seconds}`
                    })
                }

            }
        }
        // Xử lý khi hết bài hát 
        // Sẽ phụ thuộc vào random & loop
        audio.onended = function() {
            if(_this.isLoop) {
                audio.play()
            } else {

                if(_this.isRandom) {
                    _this.randomSong()
                } else {
                    _this.nextSong()
                }
                audio.play()

            }
        }
        // =====================================================================
        
        // Khi thay đổi thanh thời gian
        time_progress.forEach(function(element) {
            function change_time() { 
                isMoving = true // Đang di chuyển thanh thời gian
                if(isMoving) {
                    // (seekTime / audio.duration) * 100
                    
                    const seekTime = element.value * audio.duration / 100 
                    time_progress_nav_update.forEach(function(e_nav_update) {
                        e_nav_update.style.width = (seekTime / audio.duration) * 100 + '%'
                    })
                    element.onmouseup = function() {
                        // thời gian tại địa điểm changed
                        audio.currentTime = seekTime
                        isMoving = false // Đang không di chuyển thanh thời gian
                    }
                    element.ontouchend = function() {
                        // thời gian tại địa điểm changed
                        audio.currentTime = seekTime
                        isMoving = false // Đang không di chuyển thanh thời gian
                    }

                    let minutes = Math.floor(seekTime / 60)
                    let seconds = Math.floor(seekTime % 60)
                    // change contentText 
                    time_current.forEach(function(e) {
                        e.textContent = `${minutes}:${seconds >= 10 ? seconds: "0"+seconds}`
                    })
                }
            }
            element.oninput = change_time
            element.ontouchstart = change_time;
            element.ontouchend = change_time;
        })


        // Xử lý click volumn âm thanh - \f60d
        var check_volume = false
        var volume_current
        volume_icon_contact.forEach(function(element) {
            element.onclick = function() {

                if(volume_current == 0) {
                    for(var i=0; i<volume_up.length;i++) {
                        volume_up[i].classList.toggle('active') 
                        volume_mute[i].classList.toggle('active')
                    }
                    audio.volume = 1
                    volume_current = audio.volume
                    volumn_process_update.forEach(function(e) {
                        e.style.width = audio.volume*100 + '%'
                    })
                } else {
                    if(!check_volume) {
                        audio.volume = 0
                        check_volume = true
                    } else {
                        if(volume_current > 0) {
                            audio.volume = volume_current
                            check_volume = false
                        } else {
                            audio.volume = 1
                            check_volume = false
                        }
                    }
                    for(var i=0; i<volume_up.length;i++) {
                        volume_up[i].classList.toggle('active') 
                        volume_mute[i].classList.toggle('active')
                    }
                }

                

            }
        })
        // Khi thay đổi thanh Volume
        volume__range.forEach(function(element) {
            element.oninput = function() {
                volumn_process_update.forEach(function(e) {
                    e.style.width = element.value + '%'
                })
            
                audio.volume = element.value / 100
                volume_current = audio.volume
                if(volume_current == 0) { 
                    for(var i=0; i<volume_up.length;i++) {
                        volume_up[i].classList.add('active') 
                        volume_mute[i].classList.add('active')
                    }
                } else {
                    for(var i=0; i<volume_up.length;i++) {
                        volume_up[i].classList.remove('active') 
                        volume_mute[i].classList.remove('active')
                    }
                }
                check_volume = false
            }
        })


        // Khi next sang bài hát
        forward.forEach(function(e) {
            e.onclick = function() {
                if(_this.isRandom) {
                    _this.randomSong()
                } else {
                    _this.nextSong()
                }
                audio.play()
                _this.scrollToActiveSong()
            }
        })
        // Khi prev lùi bài hát 
        prev.forEach(function(e) {
            e.onclick = function() {
                if(_this.isRandom) {
                    _this.randomSong()
                } else {
                    _this.prevSong()
                }
                audio.play()
                _this.scrollToActiveSong()
            }
        })

        // Khi click random
        random.forEach(function(e) {
            e.onclick = function() {
                _this.isRandom = !_this.isRandom
                // Đối số thứ 2 của toggle là lấy giá trị boolean để kiếm tra
                for(var i = 0; i < random.length; i++) {
                    random[i].classList.toggle('active', _this.isRandom)
                }
            }
        })
        // Khi click loop
        loop.forEach(function(e) {
            e.onclick = function() {
                _this.isLoop = !_this.isLoop
                if(_this.isLoop) {
                    for(var i = 0; i < loop.length; i++) {
                        loop[i].classList.toggle('active', _this.isLoop)
                    }
                }
            }
        })

        // Lắng nghe hành vi click vào play list
        listSongs_songs_main.forEach(function(listSong) {
            listSong.onclick = function(element) {
                const songNode = element.target.closest('.song:not(.active)')
                // && not options ! e.target.closest('.option)
                if(songNode) {

                    // Xử lý click vào bài hát
                    if(songNode) {
                        // songNode.getAttribute('data-index') = songNode.dataset.index
                        // Dạng chuỗi <=> convert to number
                        _this.currentIndex = Number(songNode.dataset.index)
                        _this.loadCurrentSong()
                        audio.play()

                    }

                    // Xử lý click vào handing

                }
            }
        })

        // Click randomPlay btn - body | listSongs
        playRandom.onclick = function() {
            // _this.isRandom = !_this.isRandom
            _this.randomPlay()
            _this.scrollToActiveSong()
        }

        // Xử lý sự kiện thay dổi options sortList
        options.onchange = function() {
            _this.defind_sort_list(options.value)
            // Song.active - Stupid
            listSongs_songs_main.forEach(function(e) {

                const songs = e.querySelectorAll('.song')
                const songs_active = e.querySelectorAll('.song.active')
                const audio_inSong = e.querySelectorAll('.song .audio_inSong')
            
                songs.forEach(function(song, index) {
                    if(audio_inSong[index].src == audio.src) {
                        _this.currentIndex = Number(song.dataset.index)
                        songs_active.forEach(function(song_active) {
                            song_active.classList.remove('active')
                        })
                        song.classList.add('active')
                    }
                })

            })
        }

                
        // Xử lý tìm kiếm bài hát
        side_input.onkeydown = function(event) {
            if(event.key == "Enter") {
                handle_result() 
                var windowWidth = $(document).width();
                if(windowWidth < 1020) {
                    side_narbar_menu.click()
                }
            }
        }
        
        function handle_result() {
            if(side_input.value != "") {
                // ====================UI====================
                // Side
                var item_active = take_one('.side_content-item.active')
                if(item_active) {
                    item_active.classList.remove('active')
                }
                
                // listSongs & result
                listSongs.classList.add('display_none')
                result.classList.add('display_block')
                // ==========================================
                
                
                var array_temporary = []
                for(let i = 0; i< _this.songs.length; i++) {
                    const a = _this.songs[i].name.toLowerCase()
                    const b = side_input.value.toLowerCase()
                    const check = a.indexOf(b)
                    if(check >= 0) {
                        array_temporary.push(_this.songs[i])
                    }
                }
                
                // Tìm thấy
                if(array_temporary.length > 0) {
                    result_found_text.innerHTML = `Kết quả bài hát cho "${side_input.value}"`
                    
                    _this.songs = array_temporary
                    _this.render()
                    
                    result_found.classList.remove('display_none')
                    result_not_found.classList.add('display_none')

                    const overlay_listSongs = take_one('.overlay_listSongs_songs .listSongs_songs_main')
                    const result_found_listSongs = take_one('.result_found_listSongs')
                    const songs = result_found_listSongs.querySelectorAll('.song')
                    const songs_audio = result_found_listSongs.querySelectorAll('.song audio')
                    const songs_active = result_found_listSongs.querySelectorAll('.song.active')
                    
                    function forward_song() {
                        songs.forEach(function(song, index) {
                            if(songs_audio[index].src == audio.src) {
                                songs_active.forEach(function(song_active) {
                                    song_active.classList.remove('active')
                                })
                                song.classList.add('active')
                            } else {
                                songs_active.forEach(function(song_active) {
                                    song_active.classList.remove('active')
                                })
                                song.classList.remove('active')
                            }
                        })
                    }
                    function prev_song() {
                        songs.forEach(function(song, index) {
                            if(songs_audio[index].src == audio.src) {
                                songs_active.forEach(function(song_active) {
                                    song_active.classList.remove('active')
                                })
                                song.classList.add('active')
                            } else {
                                songs_active.forEach(function(song_active) {
                                    song_active.classList.remove('active')
                                })
                                song.classList.remove('active')
                            }
                        })
                    }

                    // Next song of RESULT
                    forward.forEach(function(e) {
                        e.onclick = function() {
                            if(_this.isRandom) {
                                _this.randomSong()
                                forward_song()
                            } else {
                                _this.nextSong()
                                forward_song()
                            }
                            audio.play()
                            _this.scrollToActiveSong()
                        }
                    })

                    prev.forEach(function(e) {
                        e.onclick = function() {
                            if(_this.isRandom) {
                                _this.randomSong()
                                prev_song()
                            } else {
                                _this.prevSong()
                                prev_song()
                            }
                            audio.play()
                            _this.scrollToActiveSong()
                        }
                    })

                    // Click songs in RESULT
                    result_found_listSongs.onclick = function(element) {
                        const songNode = element.target.closest('.song:not(.active)')
                        if(songNode) {
                            // Xử lý click vào bài hát
                            if(songNode) {
                                _this.songs = array_temporary
                                _this.currentIndex = Number(songNode.dataset.index)
                                _this.loadCurrentSong()
                                audio.play()
                            }

                            // Xử lý click vào handing

                        }
                    }

                    overlay_listSongs.onclick = function(element) {
                        const songNode = element.target.closest('.song:not(.active)')
                        if(songNode) {
                            // Xử lý click vào bài hát
                            if(songNode) {
                                _this.songs = array_temporary
                                _this.currentIndex = Number(songNode.dataset.index)
                                _this.loadCurrentSong()
                                audio.play()
                            }

                            // Xử lý click vào handing

                        }
                    }
                    
                } else {
                    result_not_found_text.innerHTML = `Kết quả bài hát cho "${side_input.value}"`
                    
                    result_found.classList.add('display_none')
                    result_not_found.classList.remove('display_none')
                }

                
                _this.songs = _this.songSort_default

                side_content_item.forEach(function(item) {
                    item.addEventListener('click', function() {
                        _this.currentIndex = Math.floor(Math.random() * app.songs.length)
                        _this.songs = _this.songSort_default
                        options.value = "default"
                        _this.render()
                    })
                })
                // Set input value to default
                side_input.value = ""
            }
        }


        // =======================================Not update yet=======================================
        const authorIcons_play = take_all('.listSongs_authors_content_icons--play')
        const authorIcons_plus = take_all('.listSongs_authors_content_icons--plus')
        authorIcons_play.forEach(function(e) {
            e.onclick = function() {
                toast({})
            }
        })
        authorIcons_plus.forEach(function(e) {
            e.onclick = function() {
                toast({})
            }
        })

        const albumIcons_play = take_all('.listSongs_albums_content_icons--play')
        const albumIcons_plus = take_all('.listSongs_albums_content_icons--plus')
        albumIcons_play.forEach(function(e) {
            e.onclick = function() {
                toast({})
            }
        })
        albumIcons_plus.forEach(function(e) {
            e.onclick = function() {
                toast({})
            }
        })

        const more = take_one('.more')
        more.onclick = function() {
            toast({})
        }
    },

    // Hành vi scroll khi nhảy bài hát mới
    scrollToActiveSong: function() {
        setTimeout(function() {
            var songActive = take_all('.song.active')
            for(var i = 0; i < songActive.length; i++) {
                // web API
                songActive[i].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
            }
        }, 300)
    },

    loadCurrentSong: function() { 
    
        // Current Info in Footer
        info_name.textContent = this.currentSong.name
        info_author.textContent = this.currentSong.author
        info_image.src = `./a_imgs/${this.currentSong.img}.jpg` 
        
        // Current Info in Overlay
        overlay_space_img.src = `./a_imgs/${this.currentSong.img}.jpg` 
        overlay_info_name.textContent = this.currentSong.name
        overlay_info_details.textContent = `${this.currentSong.author} • ${this.currentSong.album}`
        overlay_info_img.src = `./a_imgs/${this.currentSong.img}.jpg` 

        // Current audio
        audio.src = `./b_songs/${this.currentSong.path}.mp3`

        // Song.active - Stupid
        listSongs_songs_main.forEach(function(e) {
            const songs = e.querySelectorAll('.song')
            const songs_audio = e.querySelectorAll('.song audio')
            const songs_active = e.querySelectorAll('.song.active')
            songs.forEach(function(song, index) {
                if(songs_audio[index].src == audio.src) {
                    songs_active.forEach(function(song_active) {
                        song_active.classList.remove('active')
                    })
                    song.classList.add('active')
                }
            })
        })
    },

    // Lấy ra toàn bộ thời gian của tất cả bài hát
    load_duration_songs: function() {
        // var arrayDurations = []
        var newArray_songs = []
        for(var i = 0; i < this.songs.length; i++) {
            newArray_songs.push(this.songs[i])
        }
        // loading all the src songs
        var htmls = newArray_songs.map(function(e,index) {
            return `
                <audio class="listAudio_item" src="./b_songs/${e.path}.mp3"></audio>
            `
        })
        listAudio.innerHTML = htmls.join('')

        var listAudio_item = take_all('.listAudio .listAudio_item')

        var audio_songs = take_all('.song audio')
        var songs_time_1 = take_all('.listSongs_songs .song .song_time')
        var songs_time_2 = take_all('.overlay_listSongs_songs .song .song_time')
        var songs_time_3 = take_all('.result_found_listSongs .song .song_time')
        
        for(let i = 0; i < listAudio_item.length; i++) {
            listAudio_item[i].addEventListener('loadedmetadata', function() {
                var duration = Math.floor(listAudio_item[i].duration)
                var minutes = Math.floor(duration / 60)
                var seconds = Math.floor(duration % 60)

                if(listAudio_item[i].src == audio_songs[i].src) {
                    songs_time_1[i].textContent = `${minutes}:${seconds >= 10 ? seconds: "0"+seconds}`
                    songs_time_2[i].textContent = `${minutes}:${seconds >= 10 ? seconds: "0"+seconds}`
                    songs_time_3[i].textContent = `${minutes}:${seconds >= 10 ? seconds: "0"+seconds}`
                }
                
            })
        }
    },

    // nextSong: next song thì load lại dữ liệu của bài hát mới
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    // prevSong: prev song thì load lại dữ liệu của bài hát mới
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    // randomSong
    randomSong: function() {
        let newIndex
        do {
            // Ngẫu nhiên 1 bài hát trong danh sách
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex == this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
        audio.play()
    },


    // randomPlay || stupid
    randomPlay: function() {
        var newIndex_random
        do {
            // Ngẫu nhiên 1 bài hát trong danh sách
            newIndex_random = Math.floor(Math.random() * this.songs.length)
        } while(newIndex_random == this.currentIndex)

        this.currentIndex = newIndex_random
        this.loadCurrentSong()
        audio.play()

        this.isRandom = true
        this.isLoop = false
        // Đối số thứ 2 của toggle là lấy giá trị boolean để kiếm tra
        for(var i = 0; i < random.length; i++) {
            random[i].classList.toggle('active', this.isRandom)
            loop[i].classList.remove('active', this.isRandom)
        }
    },

    
    start: function() {
        // backup list songs
        this.backup_songs()

        // Render authors
        this.render_authors()
        // Render albums
        this.render_albums()

        // Render playlist
        this.render();
        // this.load_duration_songs()
        this.load_duration_songs()

        // Định nghĩa các thuộc tính cho Object
        // NOW: Lấy ra các giá trị của bài hát hiện tại 
        this.defineProperties();
        
        // Lắng nghe các sự kiện (DOM Events)
        this.handleEvents();
        
        // Tải thông tin bài hát vào giao diện
        this.loadCurrentSong();
        
        
    }
    
}
app.start();

