const play = document.querySelector('.play')
const video = document.querySelector('.video')
const videoDiv = document.querySelector('.video-div')
const cancelBtn = document.querySelector('.cancel')

play.addEventListener('click',()=>{
if(!videoDiv.classList.contains('show')){
    videoDiv.classList.add('show')

    video.classList.add('scale')
    cancelBtn.style.display = 'flex'
}

    
    
    
})
cancelBtn.addEventListener('click',()=>{
    videoDiv.classList.remove('show')
    if(video.classList.contains('scale')){
        video.classList.remove('scale')
        cancelBtn.style.display = 'none'
    }
})


const text = ["creative ideas.", "customer satisfaction.", "business needs."]
const profession = document.querySelector('.type')
const cursor = document.querySelector('.cursor')



let textIndex = 0;
let charIndex = 0;
let typingSpeed = 150;
let erasingSpeed = 150;
let textDelay = 400;

const typeWriter = () => {
    if(!cursor.classList.contains('typing')){
        cursor.classList.add("typing")
    }

    if(charIndex < text[textIndex].length){
            
            profession.textContent += text[textIndex].charAt(charIndex);
            charIndex++
            setTimeout(typeWriter,typingSpeed)
    } else{
        cursor.classList.remove('typing')
        setTimeout(erase,textDelay)
    }
};
function erase(){
    if(!cursor.classList.contains('typing')){
        cursor.classList.add("typing")
    }
    if(charIndex >= 0){
        profession.textContent = text[textIndex].slice(0,charIndex)
        charIndex--
        setTimeout(erase,erasingSpeed)
    }else{
        cursor.classList.remove("typing")
        textIndex++
        if(textIndex >= text.length) textIndex = 0
        setTimeout(typeWriter,textDelay)
    }
}


document.addEventListener('DOMContentLoaded',function(){
    setTimeout(typeWriter , textDelay)
})


const btns = document.querySelectorAll('.btn-slide')







const slidescontainer = document.querySelector('.case-study-slider')
const slide =(document.querySelectorAll(".case-study-box"))
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const thirdcsBtn = document.getElementById('thirdBtn')
const fourthcsBtn = document.getElementById('forthBtn')

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("focus");
        //   console.log(current)
          current[0].className = current[0].className.replace("focus", "");
          this.className += " focus";
        });
}

nextBtn.addEventListener('click',()=>{
    slide.forEach((sli)=>{
        let slideWidth = sli.clientWidth;
        sli.style.transform = `translateX(${-(slideWidth)- 40}px)`
        sli.style.transition = 'all 0.4s ease-in-out'
    })
})


prevBtn.addEventListener('click',()=>{

    slide.forEach((sli)=>{
        let slideWidth = sli.clientWidth;
        sli.style.transform = `translateX(${(slideWidth) - 400}px)`
        sli.style.transition = 'all 0.4s ease-in-out'
    
    })
})
thirdcsBtn.addEventListener('click',()=>{
    console.log('dc')
    slide.forEach((sli)=>{
        let slideWidth = sli.clientWidth;
        sli.style.transform = `translateX(${-(slideWidth) - 480}px)`
        sli.style.transition = 'all 0.4s ease-in-out'
    })
})
fourthcsBtn.addEventListener('click',()=>{
    console.log('dc')
    slide.forEach((sli)=>{
        let slideWidth = sli.clientWidth;
        sli.style.transform = `translateX(${-(slideWidth) - 920}px)`
        sli.style.transition = 'all 0.4s ease-in-out'
    })
})




const firstBtn = document.getElementById('first-btn')
const thirdBtn = document.getElementById("third-btn")
const secondBtn = document.getElementById("second-btn")
const testiSlides = document.querySelectorAll('.testimonials-text-slider')
const testiBtns = document.querySelectorAll('.tsm-slide')


firstBtn.addEventListener('click',()=>{
    testiSlides.forEach((sli)=>{
        let slideWidth = sli.clientWidth;
        sli.style.transform = `translateX(${(slideWidth) - slideWidth}px)`
        sli.style.transition = 'all 0.4s ease-in-out'
    })
})

secondBtn.addEventListener('click',()=>{
    testiSlides.forEach((sli)=>{
        let slideWidth = sli.clientWidth;
        sli.style.transform = `translateX(${-(slideWidth) - 30}px)`
        sli.style.transition = 'all 0.4s ease-in-out'
    })
})
thirdBtn.addEventListener('click',()=>{
    testiSlides.forEach((sli)=>{
        let slideWidth = sli.clientWidth;
        sli.style.transform = `translateX(${-(slideWidth * 2)- 60}px)`
        sli.style.transition = 'all 0.4s ease-in-out'
    })
})


for (let i = 0; i < testiBtns.length; i++) {
testiBtns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      console.log(current)
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  const nav = document.querySelector('nav')
  const links = document.querySelectorAll('.parent-link')
  const logoFixed = document.querySelector('.logo-fixed')
  const logoShow = document.querySelector('.logo-show')
  const icon = document.querySelector('.icon-fixed')
  const backToTopBtn = document.querySelector('.back-to-top')
  const burger = document.querySelector('.hamburger')
  
  window.addEventListener('scroll',(e)=>{
    const scroll = (document.documentElement.scrollTop)
    if(scroll >= 800){
       nav.classList.add('nav-fixed')
       links.forEach((li)=>{
        li.style.color = 'black'
       })
       logoShow.style.display = 'none'
       logoFixed.style.display = 'block'
       icon.style.color = 'black'
       backToTopBtn.style.visibility = 'visible'
       burger.style.color = 'black'
       
    }
    else{
        
        nav.classList.remove('nav-fixed')
        links.forEach((li)=>{
            li.style.color = 'white'
        })
        logoFixed.style.display = 'none'
        logoShow.style.display = 'block'
        icon.style.color = 'white'
        backToTopBtn.style.visibility = 'hidden'
        burger.style.color = 'white'
      
    }
  })

  backToTopBtn.addEventListener('click',()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  })

const value1 = document.querySelector('.value-1')
const value2 = document.querySelector('.value-2')
const checkBox = document.querySelector('#check')
const duration = document.querySelectorAll('.duration')



checkBox.addEventListener('click',function check(){
    if(checkBox.checked){
       value1.textContent = '199'
       value2.textContent = '499'
       duration.forEach((Dur)=>{
        Dur.textContent = '/yr'
       })
       
    }else{
        value1.textContent = '19'
        value2.textContent = '49'
        duration.forEach((Dur)=>{
            Dur.textContent = '/mo'
           })
    }
}
)
const searchBarDiv = document.querySelector('.search-bar-div')
const searchRow = document.querySelector('.search-bar-row')
const searchCancel = document.querySelector('.search-bar-cancel')
icon.addEventListener('click',()=>{
    searchBarDiv.style.display = 'block'
    if(!searchRow.classList.contains('search-bar-show')){
        searchRow.classList.add('search-bar-show')
    }

})
searchCancel.addEventListener('click',()=>{
    searchBarDiv.style.display = 'none'
    if(searchRow.classList.contains('search-bar-show')){
        searchRow.classList.remove('search-bar-show')
    }
})

function updateProgress() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100 + '%';
    document.querySelector(".inner-circle").style.setProperty("--progress", scrollPercent);
}
  updateProgress();
  
  document.addEventListener("scroll", updateProgress);



  const navLinks = document.querySelector('.links')
  const navCancel = document.querySelector('.nav-bar-cancel')

  burger.addEventListener('click',()=>{
    if(!navLinks.classList.contains('nav-mobile')){
        navLinks.classList.add('nav-mobile')
    
    }
   
  })
  navCancel.addEventListener('click',()=>{
    if(navLinks.classList.contains('nav-mobile')){
        navLinks.classList.remove('nav-mobile')
    }
  })
 
//   function changeIcon(){
//     if(screen.availWidth <= 991){
//         document.querySelectorAll('.mobile-icon-change').forEach((down)=>{
//             down.innerHTML = ` <i class="fa-solid fa-angle-down"></i>`
//         })
//     }
//   }
//   changeIcon()

  window.addEventListener('scroll',()=>{
    const scroll = (document.documentElement.scrollTop)
    if(scroll >= 800 && screen.availWidth <= 991){
        links.forEach((li)=>{
            li.style.color = 'white'
        })
        nav.classList.add('mobile-nav-fixed')
        
    }
    else{
        nav.classList.remove('mobile-nav-fixed')
    }
  })