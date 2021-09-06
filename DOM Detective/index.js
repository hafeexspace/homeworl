  // 6. Exercise: The DOM Detective
    
      // let title = document.querySelector("title")
      // console.log(title.innerText)

      // let logo = document.querySelector(".navi_banner_logo")
      // console.log(logo.innerText)

      // let btn = document.querySelector(".navi_menu_item_link")
      // console.log(btn.innerText)

      // let heading = document.querySelector(".home-hero__billboard h1")
      // console.log(heading.innerText)

      // let domnodes = document.querySelectorAll(".courses-grid_item ")
      // console.log(domnodes)

      // let campus = document.querySelector(".facts_list_item")
      // console.log(campus.innerText)

      // let t3ype = document.querySelector(".facts_list .facts_list_item:nth-child(3)")
      // console.log(t3ype.innerText)

      // let lgclient = document.querySelector(".Employers__list___1cuG_")
     //  letsocfb = document.querySelector(".navi_footer-social-icons_facebook")
     //  letsoctw = document.querySelector(".navi_footer-social-icons_twitter")
     //  letsocin = document.querySelector(".navi_footer-social-icons_linkedin")
     //  letsocinsta = document.querySelector(".navi_footer-social-icons_instagram")
     // letinput = document.querySelector(".navi_footer-signup input[type="email"]")

  // 7. Exercises: Working with the CSSOM

        //let logo = document.querySelector(".lnXdpd")
        //let currsrc = logo.getAttribute("src")
        //let srcsett = logo.getAttribute("srcset")

        //logo.setAttribute("src", "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg") 
        //console.log("test")
        //logo.removeAttribute("scrSet")

        //let googlese = document.querySelector(".gNO89b")
        //googlese.setAttribute("value", "yahoo search")

  // 8. Exercise: More DOM Manipulation

    // 1. about me
    
      function aboutme () {

        let arial = document.querySelector("body"); 
        arial.style.fontFamily = "Arial, sans-serif";
        let nickname = document.querySelector("#nickname");
        nickname.innerText = "abdigun";
        let favorite = document.querySelector("#favorites");
        favorite.innerText ="lol";
        let home = document.querySelector("#hometown");
        home.innerText = "lmao";

        let listall = document.querySelectorAll("li")
        for(let i = 0;i < listall ;i++) {
          listall[i].setAttribute("class" , "list-item")
        }

        // listall.forEach(function (x) {
        // x.setAttribute("class", "list-item")
        
    }

      //aboutme()

    // 2. The Book List

       const books = [
        {
          title: "Gödel, Escher, Bach",
          author: "Douglas Hofstadter",
          alreadyRead: false
        },
        {
          title: "Sapiens: A Brief History of Humankind",
          author: "Yuval Noah Harari",
          alreadyRead: true
        },
        {
          title: "A Short History of Nearly Everything",
          author: "Bill Bryson",
          alreadyRead: true
        },
        {
          title: "A Life on our Planet",
          author: "David Attenborough",
          alreadyRead: true
        },
        {
          title: "Cosmos",
          author: "Carl Sagan",
          alreadyRead: false
        }
      ];
        
      function createbook() {
        
        for(let i = 0; i < books.length ; i++) {
           let currentbook = books[i];
           console.log(currentbook)
           let li = document.createElement("li");
           li.innerHTML = `<p>${currentbook.title}</p><p>${currentbook.author}</p>`
           contbook.appendChild(li)
          if(currentbook.alreadyRead === true ) {
              li.style.color = "red" ;           
          }
           
        }
        
      }
      let booklist = document.querySelector("h1"); 
      let contbook = document.createElement("ul");
      booklist.appendChild(contbook)
      createbook();