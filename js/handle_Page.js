// Bind 
const take_one = document.querySelector.bind(document);
const take_all = document.querySelectorAll.bind(document);


// 1.Slide 
const side_narbar_menu = take_one('.side_narbar-item_menu'),
side = take_one('.side'), 
side_logo = take_one('.side_logo'),
search_bar = take_one('.side_search-bar'),
search_input = take_one('.side_search-bar input'),
search_btn = take_one('.side_narbar-item .fa-search'),
side_content = take_one('.side_content'),
side_content_item = take_all('.side_content-item'),
side_content_text = take_all('.side_content p'),
my_music = take_one('.my_music'),
recent_content = take_one('.recent_content'),
currently_playing = take_one('.currently_playing');

// 2.listSongs 
const listSongs = take_one('.listSongs')
const listSongs_menu_item = take_all('.listSongs_menu_item')

// 2.1.Result
const result = take_one('#result')

// 3.footer
const information = take_one('.information');
const info_name = take_one('.info_name');
const info_author = take_one('.info_author');

// 4.overlay
const overlay = take_one('#overlay'),
overlay_volume = take_one('.overlay_volume i'),
overlay_volume_detail = take_one('#overlay .volumn_details'),
overlay_btn = take_one('.overlay_btn'),
overlay_space = take_one('.overlay_space'),
overlay_listSongs_icon = take_one('.overlay_listSongs_icon'),
overlay_listSongs_songs = take_one('.overlay_listSongs_songs')


// =====FUNCTION===== 
// 1.Side
function compress_side() {
    side.style.width = 50+'px'
    side_logo.style.display = 'none'
    search_bar.style.padding = '0'
    Object.assign(search_input.style, {
        display: 'none',
        height: 50+'px'
    });
    Object.assign(search_btn.style, {
        position: 'unset',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'none',
        width: 50+'px',
        height: 50+'px',
    });
    side_content_text.forEach(function(content) {
        content.style.display = 'none'
    })
}

function expand_side() {
    side.style.zIndex = 99999 
    side.style.width = 280+'px'
    side_logo.style.display = 'flex'
    if(check == true) {
    }
    search_bar.style.padding = '7px 16px'
    Object.assign(search_input.style, {
        display: 'block',
        height: 'unset'
    });
    Object.assign(search_btn.style, {
        display: 'block',
        position: 'absolute',
        width: 'unset',
        height: 'unset',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
    });
    side_content_text.forEach(function(content) {
        content.style.display = 'block'
    })
}

var side_overlay = take_one('.side_overlay')
var check;
side_narbar_menu.addEventListener('click', function() {
    var windowWidth = $(document).width();
    if(check == false) {
        if(windowWidth <= 768) {
            side_overlay.classList.add('display_none')
            search_bar.classList.remove('side_content_changed')
            side_content.classList.remove('side_search-bar_changed')
            side.classList.remove('side_changed_height')
        }
        compress_side();
        check = true;
    } else {
        if(windowWidth <= 768) {
            side_overlay.classList.remove('display_none')
            search_bar.classList.add('side_content_changed')
            side_content.classList.add('side_search-bar_changed')
            side.classList.add('side_changed_height')
        }
        expand_side();
        check = false;
    }
})

// search_btn.addEventListener('click', function(event) {
//     event.preventDefault()
//     expand_side();
//     search_input.focus();
//     check = false;
// })

// Item SIDE
my_music.onclick = function() {
    listSongs.classList.remove('display_none')
    result.classList.remove('display_block')
    var item_active = take_one('.side_content-item.active')
    if(item_active) {
        item_active.classList.remove('active')
    }
    my_music.classList.add('active')
    var windowWidth = $(document).width();
    
    if(windowWidth <= 768) {
        side_overlay.classList.add('display_none')
        search_bar.classList.remove('side_content_changed')
        side_content.classList.remove('side_search-bar_changed')
        side.classList.remove('side_changed_height')
    }
    if(windowWidth <= 1020) {
        compress_side();
        check = true;
    }    
}

recent_content.onclick = function() {
    var item_active = take_one('.side_content-item.active')
    if(item_active) {
        item_active.classList.remove('active')
    }
    recent_content.classList.add('active')
    var windowWidth = $(document).width();
    if(windowWidth <= 768) {
        side_overlay.classList.add('display_none')
        search_bar.classList.remove('side_content_changed')
        side_content.classList.remove('side_search-bar_changed')
        side.classList.remove('side_changed_height')
    }
    if(windowWidth <= 1020) {
        compress_side();
        check = true;
    }   
    toast({
        notify: "Thông báo",
        title: "Tính năng này chưa được cập nhật... sr ಥ_ಥ",
        type: "main",
        duration: 2000
    })
}

currently_playing.onclick = function() {
    setTimeout(openOverlay(), 300)
    
    var item_active = take_one('.side_content-item.active')
    if(item_active) {
        item_active.classList.remove('active')
    }
    currently_playing.classList.add('active')
    var windowWidth = $(document).width();
    if(windowWidth <= 768) {
        side_overlay.classList.add('display_none')
        search_bar.classList.remove('side_content_changed')
        side_content.classList.remove('side_search-bar_changed')
        side.classList.remove('side_changed_height')
    }
    if(windowWidth <= 1020) {
        compress_side();
        check = true;
    }    
}




// Songs - listSongs_menu
const listSongs_controls = take_one('.listSongs_controls')
const listSongs_songs = take_one('.listSongs_songs')
// Authors - listSongs_menu
const listSongs_authors = take_one('.listSongs_authors')
// Albums - listSongs_menu
const listSongs_albums = take_one('.listSongs_albums')

// 2.listSongs
listSongs_menu_item.forEach(function(item, index) {
    item.onclick = function() {
        var item_active = take_one('.listSongs_menu_item.active')
        item_active.classList.remove('active')
        item.classList.add('active')

        if(index == 0) {
            listSongs_controls.classList.remove('display_none')
            listSongs_songs.classList.remove('display_none')
            listSongs_authors.classList.add('display_none')
            listSongs_albums.classList.add('display_none')
        } else if(index== 1) {
            listSongs_controls.classList.add('display_none')
            listSongs_songs.classList.add('display_none')
            listSongs_authors.classList.remove('display_none')
            listSongs_albums.classList.add('display_none')
        } else if(index == 2) {
            listSongs_controls.classList.add('display_none')
            listSongs_songs.classList.add('display_none')
            listSongs_authors.classList.add('display_none')
            listSongs_albums.classList.remove('display_none')
        }
    }
})



// 3.footer
function openOverlay() {
    overlay.classList.add('display_flex')
    function overlay_opacity_add() {
        overlay.classList.add('opacity_1');
    }
    setTimeout(overlay_opacity_add, 500)
}

information.onclick = function(){
    openOverlay()
}



// 4.overlay
overlay_btn.onclick = function() {
    overlay.classList.remove('opacity_1')
    function overlay_display_remove() {
        overlay.classList.remove('display_flex')
    }
    setTimeout(overlay_display_remove, 500)
}

overlay_volume.onclick = function() {
    overlay_volume_detail.classList.toggle('active')
}


overlay_listSongs_icon.onclick = function() {
    overlay_listSongs_songs.classList.toggle('active')
    overlay_space.classList.toggle('active')
}



// ==========================================================
// ==========================================================
// ===========================PAGE===========================
// ==========================================================
// ==========================================================
// 1.Loading PAGE for SIDE
window.addEventListener('DOMContentLoaded', function() {
    var windowWidth = $(document).width();
    if(windowWidth <= 1020) {
        side.style.position = 'fixed'
        if(windowWidth > 770) {
            take_one('.listSongs').style.marginLeft = 50+'px'
        }
    } else {
        side.style.position = 'relative'
        take_one('.listSongs').style.marginLeft = 0+'px'
        check = false;
    };
})


// 2.resizing PAGE for listSongs
window.addEventListener('resize', function() {
    var windowWidth = $(document).width();
    if( windowWidth <= 1020) {
        side.style.position = 'fixed'
        if(windowWidth <= 769) {
            take_one('.listSongs').style.marginLeft = 0+'px'
        } else {
            take_one('.listSongs').style.marginLeft = 50+'px'
        }
        compress_side();
        check = true;
    } else {
        side.style.position = 'relative'
        take_one('.listSongs').style.marginLeft = 0+'px'
        expand_side();
        check = false;
    };

})


// 3.Loading page for FOOTER 
window.addEventListener('DOMContentLoaded', function() {
    var windowWidth = $(document).width();
    if(windowWidth <= 700) {
        info_name.behavior = 'scroll';
        info_name.start()
        
        info_name.scrollAmount = "3"
        info_author.scrollAmount = "3"
    }
})



// TOAST MESSAGE
function toast({notify = 'Thông báo', title = 'Tính năng này chưa được cập nhật... sr ಥ_ಥ', 
type = 'main', duration = 2000}) {
    const main = take_one('#toast')
    if(main) {
        const toast = document.createElement('div')

        // Auto remove
        const auto_remove = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000)

        // Click remove
        toast.onclick = function(e) {
            if(e.target.closest('.toast_close')) {
                main.removeChild(toast)
                clearTimeout(auto_remove)
            }
        }

        const delay = (duration / 1000).toFixed(2)

        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `
            slide_in_left linear .3s, 
            fadeOut linear 1s ${delay}s forwards
        `

        toast.innerHTML = `
            <div class="toast_icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="toast_content">
                <div class="toast_notify">${notify}</div>
                <div class="toast_title">${title}</div>
            </div>
            <div class="toast_close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast)
    }
}